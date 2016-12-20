var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
	
	render: function() {
		
		var {todos} = this.props;
		var renderTodos =  () => {
			return todos.map((todo) => {
				return (
					/* When generating multiple instances of a component, you need to give them a unique id so React knows how to handle each one of them. */
					<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
					/* Spread operator will pull each attribute of todo down to the Todo component. */
				)	
			});
		};
		
		return (
			<div>
				{renderTodos()}
			</div>	
		)	
	}	
});

module.exports = TodoList;