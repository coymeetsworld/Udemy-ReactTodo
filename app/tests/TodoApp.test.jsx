/* To test rendered components. */
var React    = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect    = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
	it('should exist', () => {
		expect(TodoApp).toExist();
	});	
	
	it('should add todo to the todos state on handleAddTodo', () => {
		var todoText = 'clean email';
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		
		/* Empty array, remove default todos. */
		todoApp.setState({todos: []});
		todoApp.handleAddTodo(todoText);
		
		/* First item should be the todoText. */
		expect(todoApp.state.todos[0].text).toBe(todoText);
		/* There should only be one item in todos array. */
		expect(todoApp.state.todos.length).toBe(1);

	});
	
});