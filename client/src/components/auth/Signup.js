import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
	onSubmit = (formProps) => {
		this.props.signup(formProps)
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit)}>
				<fieldset>
					<label>Email</label>
					<Field
						name="email"
						type="text"
						component="input"
						autoComplete="new-email" //"new-email" was a work-around for "none" not working
					/>
				</fieldset>
				<fieldset>
					<label>Password</label>
					<Field
						name="password"
						type="password"
						component="input"
						autoComplete="new-password" //see email field above for why "new-password"
					/>
				</fieldset>
				<button>Sign Up!</button>
			</form>
		)
	}
}

//redux helper 'compose' is used to wrap multiple higher order functions for greater code readability
export default compose( connect(null, actions), reduxForm({ form: 'signup' }) )(Signup);
