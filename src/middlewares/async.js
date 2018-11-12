// export default function({ dispatch }) {
// 	return function(next) {
// 		return function(action) {
//
// 		}
// 	}
// }

//refactored below with es6 syntax. if only one expression in curly braces we can omit and take out return

export default ({ dispatch }) => next => action => {
	//check to see if action has payload on its action property, if it does wait for resolve otherwise send on to next
	// debugger;
	if(!action.payload || !action.payload.then) {
		return next(action);
	}

	//wait for it to resolve and create a new action with that data and dispatch it
	action.payload.then(function(response) {
		const newAction = { ...action, payload: response }
		dispatch(newAction);
	})
};
