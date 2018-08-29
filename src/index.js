import React, { Component } from "react";
import { render } from "react-dom";
import Chart from './components/chart';
import Questionnaire from './components/questionnaire'

import "./styles.scss";

class App extends Component {

  constructor(props) {

    super(props);
  };

  render() {
    return(
      <div>    
        <Questionnaire />
      </div>
    )
  };

}

render(<App />, document.getElementById("app"));
