var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict'); /* used to assert values are not updated, if so the test will fail. Part of testing 'pure' functions where the inputs given don't get modified.*/

describe('Reducers', () => {
	
	describe('searchTextReducer', () => {
		it('should set searchText', () => {
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'dog'
			};
			
			//var res = reducers.searchTextReducer('', action);
			var res = reducers.searchTextReducer(df(''), df(action));
			
			expect(res).toEqual(action.searchText);	
		});
	});

	describe('showCompletedReducer', () => {
		it('should toggle showCompleted', () => {
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED'
			};
			
			//var res = reducers.showCompletedReducer(false, action);
			var res = reducers.showCompletedReducer(df(false), df(action));
			
			expect(res).toEqual(true);
		});
	});
	
	describe('todosReducer', () => {
		it('should add new todo', () => {
			var action = {
				type: 'ADD_TODO',
				todo: {
					id: 'abc123',
					text: 'Walk the dog',
					completed: false,
					createdAt: 92384275,
				}
			};
			
			var res = reducers.todosReducer(df([]), df(action));
			
			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(action.todo);
		});
		
		it('should toggle todo', () => {
			
			var todos = [{
				id: '123',
				text: 'Something',
				completed: true,
				createdAt: 123,
				completedAt: 125	
			}];
		
			var updates = {
				completed: false,
				completedAt: null
			};

			var action = {
				type: 'UPDATE_TODO',
				id: todos[0].id,
				updates
			};
			
			var updatedTodos = reducers.todosReducer(df(todos), df(action));
			expect(updatedTodos.length).toEqual(1); // Shouldn't have removed it
			expect(updatedTodos[0].text).toEqual(todos[0].text); // Shouldn't have changed the todo
			expect(updatedTodos[0].completed).toEqual(updates.completed); // When toggling a completed todo it should be incomplete.
			expect(updatedTodos[0].completedAt).toEqual(updates.completedAt); // Completed at date turns to undefined when its incompleted	

		});
		
		it ('should add existing todos', () => {
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

			var res = reducers.todosReducer(df([]), df(action));	
			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(todos[0]);
		});
		
		it ('should wipe todos on logout', () => {
			var todos = [{
				id: '111',
				text: 'something',
				complted: false,
				completedAt: undefined,
				createdAt: 33000	
			}];
			var action = {
				type: 'LOGOUT'
			};	

			var res = reducers.todosReducer(df(todos), df(action));	
			expect(res.length).toEqual(0);
		});
		
	});
	
	describe('authReducer', () => {
		
		it('should store uid on LOGIN', () => { 
			const action = {
				type: 'LOGIN',
				uid: 'abc123'
			};
			
			const res = reducers.authReducer(undefined, df(action));
			
			expect(res).toEqual({
				uid: action.uid
			});
		});	
		
		it('should wipe auth on LOGOUT', () => { 
			const authData = {
				uid: '123abc'
			};
			const action = {
				type: 'LOGOUT'
			};

			const res = reducers.authReducer(df(authData), df(action));
			expect(res).toEqual({});
		});	
	});
	
});