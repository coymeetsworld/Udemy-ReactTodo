import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
	
	it('should generate search text action', () => {
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'Some search text'
		};
		
		var res = actions.setSearchText(action.searchText);
		
		expect(res).toEqual(action);
	});
	
	it('should generate add todo action', () => {
		var action = {
			type: 'ADD_TODO',
			todo: {
				id: 'abc123',
				text: 'Walk the dog',
				completed: false,
				createdAt: 0,
			}
		};
		
		var res = actions.addTodo(action.todo);
		
		expect(res).toEqual(action);
	});
	
	/* Remember, done is used by mocha to specify an async test. */
	it('should create todo and dispatch ADD_TODO', (done) => {
		const store = createMockStore({});
		const todoText = 'My todo item';
		store.dispatch(actions.startAddTodo(todoText)).then(() => {
			const actions = store.getActions();
			expect(actions[0]).toInclude({ /* Doesn't have to be all properties.*/
				type: 'ADD_TODO',
			});	
			expect(actions[0].todo).toInclude({
				text: todoText
			});
			done(); /* Needed to signal to Karma that testing is done. */
		}).catch(done); /* It will call done with the error arguments, which will fail the test. */

	});
	
	it('should generated add todos action object', () => {
		var todos = [{
			id: '111',
			text: 'something',
			complted: false,
			completedAt: undefined,
			createdAt: 33000	
		}];
		var action = {
			type: 'ADD_TODOS',
			todos
		};
		
		var res = actions.addTodos(todos);
		expect(res).toEqual(action);
		
	});
	
	it('should generate toggle show completed action', () => {
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		};
		
		var res = actions.toggleShowCompleted();
		expect(res).toEqual(action);
	});
	
	it('should generate toggle todo action', () => {
		var action = {
			type: 'TOGGLE_TODO',
			id: 123
		};
		
		var res = actions.toggleTodo(123);
		expect(res).toEqual(action);
	});
});