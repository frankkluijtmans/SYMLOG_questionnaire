import React, { Component } from "react";
import Questions from './../assets/questions';

import "./../styles/answer.scss";

export default class Answer extends Component {

	constructor(props) {

		super(props);
	};

	render() {
		return(
				<div className={ 'Answer' }> 
						<label 
							className={ Questions.data[this.props.index].answer === '0' ? 'active': '' }
							value="0"
							onClick={this.toggleAnswer.bind(this)}
						>
							Rarely
						</label>           
						<label
							className={ Questions.data[this.props.index].answer === '1' ? 'active': '' }
							value="1"
							onClick={this.toggleAnswer.bind(this)}
						>
							Sometimes
						</label>
						<label 
							className={ Questions.data[this.props.index].answer === '2' ? 'active': '' }
							value="2"
							onClick={this.toggleAnswer.bind(this)}
						>
							Often
						</label>
				</div>
		)
	};

	toggleAnswer(e) {

		document.dispatchEvent(new Event('answer_selected'));

		Questions.data[this.props.index].answer = e.target.getAttribute('value');
		this.forceUpdate();
	}
}