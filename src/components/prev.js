import React, { Component } from "react";

import "./../styles/controls.scss";

export default class Prev extends Component {

	constructor(props) {

		super(props);
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