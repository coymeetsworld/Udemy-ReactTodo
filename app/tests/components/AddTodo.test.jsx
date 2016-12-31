/* To test rendered components. */
var React    = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect    = require('expect');
var $ = require('jquery');

import * as actions from 'actions';

// This won't have the store? just the raw class.
var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	});

	it('should dispatch ADD_TODO when valid todo text', () => {
		var todoText = 'Take out trash';
		var action = actions.startAddTodo(todoText);

		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));
		
		addTodo.refs.newTodo.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]); /* Pulling first DOM node from form. */
		
		expect(spy).toHaveBeenCalledWith(action);
	});
	
	it('should not dispatch ADD_TODO when invalid todo text', () => {
		var todoText = '';
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));
		
		addTodo.refs.newTodo.value = '';
		TestUtils.Simulate.submit($el.find('form')[0]); /* Pulling first DOM node from form. */
		
		expect(spy).toNotHaveBeenCalled();
	});
	
});