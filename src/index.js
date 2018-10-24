import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers'; //using absolute urls (see .env), will go straight to index when you use folder

import App from 'components/App';

ReactDOM.render(
	<Provider store={createStore(reducers, {})}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
