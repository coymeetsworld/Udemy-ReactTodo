var React = require('react');

var AddTodo = React.createClass({
	
	handleSubmit: function(e) {
		e.preventDefault();
		
		var newTodoText = this.refs.newTodo.value;
		
		if (newTodoText !== '') {
			this.refs.newTodo.value = '';
			this.props.onAddTodo(newTodoText);
		} else {
			this.refs.newTodo.focus(); /* If data is invalid, cursor will go back to text field. +1 Usability. */
		}
		
	},

	render: function() {
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" ref="newTodo" placeholder="What do you need to do?"/>
					<button className="button expanded">Add Todo</button>	
				</form>
			</div>
		)
	}
	
});

module.exports = AddTodo;