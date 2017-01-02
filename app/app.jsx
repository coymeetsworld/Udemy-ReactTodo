var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux'); // Passes store down to children.
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure(); /* Returns redux store object. */
var TodoAPI = require('TodoAPI');

/* Create async action and gets data from Firebase. */
store.dispatch(actions.startAddTodos());

//Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Provider store={store}>
		<TodoApp/>	
	</Provider>,
	document.getElementById('app')
);
