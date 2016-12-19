/* To test rendered components. */
var React    = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect    = require('expect');
var $ = require('jquery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	});

	it('should call onAddTodo if valid todo is entered (non empty String)', () => {
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
		var todoText = 'Take out trash';
		var $el = $(ReactDOM.findDOMNode(addTodo));
		
		addTodo.refs.newTodo.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]); /* Pulling first DOM node from form. */
		
		expect(spy).toHaveBeenCalledWith(todoText);
	});
	
	it('should not call onAddTodo if invalid todo is entered (empty String)', () => {
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));
		
		addTodo.refs.newTodo.value = '';
		TestUtils.Simulate.submit($el.find('form')[0]); /* Pulling first DOM node from form. */
		
		expect(spy).toNotHaveBeenCalled();
	});
	
});