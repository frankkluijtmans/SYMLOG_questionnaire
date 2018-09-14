import React, { Component } from "react";

import "./../styles/controls.scss";

export default class Prev extends Component {

	constructor(props) {

		super(props);

		document.addEventListener('keydown', (event) => {

			if(event.which === 37) {

				this.props.clickhandler();
			}
		});
	};

	render() {
		return(
			<div 
				onClick={ this.props.clickhandler }
				className={ 'Control Prev' }
			>
				&lt; Previous
			</div>
		)
	};

}