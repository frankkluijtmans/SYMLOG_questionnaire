import React, { Component } from "react";
import Questions from './../assets/questions';

import "./../styles/controls.scss";

export default class Next extends Component {

	constructor(props) {

		super(props);

		document.addEventListener('answer_selected', () => {
			
			this.forceUpdate();
		});
	};

	render() {
		return(
			<div>
				{this.props.index === 26 ? (
					<div 
						className={ 
							Questions.data[this.props.index].answer !== null && Questions.data[this.props.index].answer !== '' ? 'Control Next' : 'Disabled Control Next' 
						}
						onClick={ this.props.clickhandler }
					>
						Get result &gt;
					</div>
				) : (
					<div 
						className={ 
							Questions.data[this.props.index].answer !== null && Questions.data[this.props.index].answer !== '' ? 'Control Next' : 'Disabled Control Next' 
						}
						onClick={ this.props.clickhandler }
					>
						Next &gt;
					</div>
				)}
			</div>
		)
	};

}