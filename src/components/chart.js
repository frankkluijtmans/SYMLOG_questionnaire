import React, { Component } from "react";
import Questions from './../assets/questions';

import "./../styles/chart.scss";

export default class Chart extends Component {

  constructor(props) {

    super(props);

    this.data = [];
  };

  componentDidUpdate(prevProps) {

    if(prevProps.stage === 'questionnaire' && this.props.stage === 'result') {
      
      this.data = [
        this.buildImage(Questions.data)
      ];

      this.forceUpdate();
    }
  }

  buildImage(questions) {

    let image = {
      name: questions[0].answer.substring(0,3).toUpperCase(),
      x: 16,
      y: 16,
      diameter: 0
    };

    questions.forEach(question => {
      
      if(question.direction) {

        let answer = parseInt(question.answer);

        switch(question.direction[0]) {
          case 0:
            break;
          case 1:
            image.diameter += answer;
            break;
          case -1:
            image.diameter -= answer;
            break;  
        }

        switch(question.direction[1]) {
          case 0:
            break;
          case 1:
            image.x += answer;
            break;
          case -1:
            image.x -= answer;
            break;  
        }

        switch(question.direction[2]) {
          case 0:
            break;
          case 1:
            image.y += answer;
            break;
          case -1:
            image.y -= answer;
            break;  
        }
      }
    });

    if(image.diameter < 1) {

      image.diameter = 1;
    }

    return image;
  }

  render() {
    return(
      <div>
        <div
          className="labels"
          style={{
            padding: 24 + "px",
            lineHeight: 24 + "px",
            textAlign: "center",
            width: 360 + "px"
          }}
        >
          F
          <div id="graph">
            {[...Array(36)].map(() => (
              <div className="barPair">
                <div className="horLine" />
                <div className="vertLine" />
              </div>
            ))}
            {this.data.map((person) => (
              <div
                className="personImage"
                style={{
                  left: (person.x * 10) - ((person.diameter * 10) / 2) + "px",
                  bottom: (person.y * 10) - ((person.diameter * 10) / 2) + "px",
                  width: (person.diameter * 10) + "px",
                  height: (person.diameter * 10) + "px"
                }}
              >
                { person.name }  
              </div>
            ))}
          </div>
          B
        </div>
      </div>
    )
  };

}