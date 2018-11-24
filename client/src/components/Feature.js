import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
	render() {
		return(
			<div>I'm the Awesome Feature Component!!!</div>
		)
	}
};

export default requireAuth(Feature);
