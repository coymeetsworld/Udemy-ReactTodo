var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

//var TodoList = require('TodoList');
import TodoList from 'TodoList';
import AddTodo from 'AddTodo'; // adds default, which is connected to the redux store
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
	
	// TodoApp doesn't handle state, so we can remove getInitialState and componentDidUpdate	

	// handleAddTodo has been converted to actions/reducers
	
	// handleSearch also been converted
	
	render: function() {
		
		//These are done in TodoList now
		//var {todos, showCompleted, searchText} = this.state;
		//var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

		//TodoSearch and AddTodo components know how to dispatch actions to store, can simplify here. */
		return (
			<div>
				<h1 className="page-title">Todo App</h1>
				
				<div className="row">
					<div className="column small-centered small-11 medium-6 large-5">	
						<div className="container">
							<TodoSearch/> 
							<TodoList/>
							<AddTodo/>
						</div>
					</div>
				</div>
			</div>
		)
	}
	
});

module.exports = TodoApp;