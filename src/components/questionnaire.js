import React, { Component } from "react";
import Questions from './../assets/questions';
import Answer from './answer';
import Chart from './chart';
import Prev from './prev';
import Next from './next';

import "./../styles/questionnaire.scss";

export default class Questionnaire extends Component {

  constructor(props) {

    super(props);
    this.questions = Questions.data;

    this.state = {
      index: 0,
      stage: 'intro'
    }
  };

  render() {
    return(
      <div>
        {this.state.index !== 0 ? <Prev clickhandler={ this.prevQuestion.bind(this) } /> : ''}

        <div className={ this.state.stage === 'intro' ? 'QuestionWrapper' : 'Hidden' }>
          <h3>Introduction</h3>
          <h2>SYMLOG questionnaire</h2>
          <p>
            The purpose of this questionnaire is to give an as honest as possible image of your teammate's characteristics.
            The results of this questionnaire will be anonomised and used for a team dynamics analysis.
            The questions state some characteristics, it is up to you to decide how often the person you are filling out this questionnaire for is displaying these characteristics.

            <input 
              type='text' 
              onChange={this.updateName}
              placeholder={ this.questions[this.state.index].question }
            />
          </p>
        </div>

        <div className={ this.state.stage === 'questionnaire' ? 'QuestionWrapper' : 'Hidden' }>
          <h3>Question { this.state.index } out of { this.questions.length - 1 }</h3>
          <blockquote>
            { this.questions[this.state.index].question }
          </blockquote>
          <Answer index={ this.state.index } />
        </div>

        <div className={ this.state.stage === 'result' ? 'ChartWrapper' : 'Hidden' }>
          <div className={'ChartExplanation'}>
            <h2>What does this chart mean?</h2>
            <p>
              The chart shows an image of the person you filled out the questionnaire for.
              This image shows where this person is on three different scales:

              <ol>
                <li>
                  <strong>Dominance vs Submisiveness</strong>
                  The position in this scale can be derived from the size of the image, or in other words; the radius of the circle.
                </li>
                <li>
                  <strong>Friendly(P) vs Unfriendly behavior(N)</strong>
                  The position in this scale can de derived from the position on the X axis.
                </li>
                <li>
                  <strong>Accepting(F) vs Rejecting task-orientation of established authority(B)</strong>
                  The position in this scale can de derived from the position on the Y axis.
                </li>
              </ol>
            </p>
          </div>
          <Chart stage={ this.state.stage } />
        </div>

        {this.state.stage !== 'result' ? <Next index={ this.state.index } clickhandler={ this.nextQuestion.bind(this) }/> : ''}
      </div>
    )
  };

  prevQuestion() {

    let curIndex = this.state.index;

    if(curIndex > 1) {
      
      this.setState({
        index: curIndex - 1
      });
    }
    else {

      this.setState({
        index: 0,
        stage: 'intro'
      });
    }
  };

  nextQuestion() {

    let curIndex = this.state.index;

    if(curIndex < (this.questions.length - 1)) {

      if(Questions.data[this.state.index].answer !== null
        && Questions.data[this.state.index].answer !== '') {
        
        this.setState({
          index: curIndex + 1,
          stage: 'questionnaire'
        });
      }
    }
    else {

      this.setState({
        index: 0,
        stage: 'result'
      });
    }
  };

  updateName(event) {

    document.dispatchEvent(new Event('answer_selected'));

    Questions.data[0].answer = event.target.value;
  }
}