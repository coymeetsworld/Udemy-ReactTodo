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
		expect(todoApp.state.todos[0].createdAt).toBeA('number');
	});
	
	it('should toggle completed value when handleToggle called', () => {
		var todoData = {				
			id: 11,
			text: 'Test features',
			completed: false,
			createdAt: 0,
			completedAt: undefined
		};
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos: [todoData]});
		
		// Check to verify there's only one todo object in the list of todos.
		expect(todoApp.state.todos.length).toBe(1);
		
		// Verify the todo is not completed.
		expect(todoApp.state.todos[0].completed).toBe(false);

		// Verify completed flag toggles to true and completedAt is a number (UNIX timestamp).
		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(true);
		expect(todoApp.state.todos[0].completedAt).toBeA('number');
	});

	it('should toggle todo from completed to incomplete', () => {
		var todoData = {				
			id: 11,
			text: 'Test features',
			completed: true,
			createdAt: 0,
			completedAt: undefined
		};
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos: [todoData]});
		
		// Check to verify there's only one todo object in the list of todos.
		expect(todoApp.state.todos.length).toBe(1);
		
		// Verify the todo is not completed.
		expect(todoApp.state.todos[0].completed).toBe(true);

		// Verify completed flag toggles back to false and completedAt is undefined.
		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(false);
		expect(todoApp.state.todos[0].completedAt).toNotExist();

	});
	
});