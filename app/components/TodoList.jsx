var React = require('react');
var {connect} = require('react-redux'); /* Companion to Provider. Provider provides access to children to store, connect chooses what it needs from it. */
import Todo from 'Todo'; // using ES6 destructuring i.e. {Todo} would give us the pure React component Todo, but we just want the connected version in our real component

export var TodoList = React.createClass({
	
	render: function() {
		
		var {todos} = this.props;
		var renderTodos =  () => {
			if (todos.length === 0) {
				return (
					<p className="container__message">Nothing to Do</p>
				)
			}
			return todos.map((todo) => {
				return (
					/* When generating multiple instances of a component, you need to give them a unique id so React knows how to handle each one of them. */
					<Todo key={todo.id} {...todo}/>
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

//module.exports = TodoList;

// connect gets called after component gets created.
//can return everything, but better to specify just what you need.	

//module.exports = connect(
export default connect(
	(state) => {
		return {
			todos: state.todos	
		};	
	}
)(TodoList);