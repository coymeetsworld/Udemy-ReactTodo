var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

/* Manages state, all others are presentational components. */
var TodoApp = React.createClass({
	
	
	getInitialState: function() {
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: uuid(),
					text: 'Walk the dog'
				}, {
					id: uuid(),
					text: 'Clean the yard'
				}, {
					id: uuid(),
					text: 'Take out trash'
				}, {
					id: uuid(),
					text: 'Wash dishes'
				}, {
					id: uuid(),
					text: 'Finish React tutorials'
				}
			]
		}	
	},

	handleAddTodo: function (todoText) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					//id: this.state.todos.length+1, What's wrong with doing this? No need for a library, simpler
					text: todoText
				}
			]
		});
	},
	
	handleSearch: function(showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	},
	
	render: function() {
		var {todos} = this.state;
		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		)
	}
	
});

module.exports = TodoApp;