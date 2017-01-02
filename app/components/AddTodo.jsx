var React = require('react');
//Connected means connected to store, w/o connect means no store, which is used for testing.
var {connect} = require('react-redux');
var actions = require('actions');

export class AddTodo extends React.Component {
	
	handleSubmit (e) {
		e.preventDefault();
		var {dispatch} = this.props;	
		var newTodoText = this.refs.newTodo.value;
		
		if (newTodoText !== '') {
			this.refs.newTodo.value = '';
			//this.props.onAddTodo(newTodoText);// prop no longer gets passed down
			dispatch(actions.startAddTodo(newTodoText));
		} else {
			this.refs.newTodo.focus(); /* If data is invalid, cursor will go back to text field. +1 Usability. */
		}
	}

	render () {
		return(
			<div className="container__footer">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" ref="newTodo" placeholder="What do you need to do?"/>
					<button className="button expanded">Add Todo</button>	
				</form>
			</div>
		)
	}
	
};

//module.exports = AddTodo;
export default connect()(AddTodo); //Since AddTodo doesn't need state, don't need to pass it in as an argument.
