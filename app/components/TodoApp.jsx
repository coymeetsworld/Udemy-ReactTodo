var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
	
	getInitialState: function() {
		return {
			todos: [
				{
					id: 1,
					text: 'Walk the dog'
				}, {
					id: 2,
					text: 'Clean the yard'
				}, {
					id: 3,
					text: 'Take out trash'
				}, {
					id: 4,
					text: 'Wash dishes'
				}, {
					id: 5,
					text: 'Finish React tutorials'
				}
			]
		}	
	},

	handleAddTodo: function (todoText) {
		alert('new todo: ' + todoText);
	},
	
	render: function() {
		var {todos} = this.state;
		return (
			<div>
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		)
	}
	
});

module.exports = TodoApp;