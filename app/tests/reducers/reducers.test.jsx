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
		
		it('should toggle incomplete todo as complete', () => {
			
			var todos = [{
				id: '123',
				text: 'Something',
				completed: true,
				createdAt: 123,
				completedAt: 125	
			}];
			
			var ToggleAction = {
				type: 'TOGGLE_TODO',
				id: '123'
			};
			
			var updatedTodos = reducers.todosReducer(df(todos), df(ToggleAction));
			expect(updatedTodos.length).toEqual(1); // Shouldn't have removed it
			expect(updatedTodos[0].text).toEqual(todos[0].text); // Shouldn't have changed the todo
			expect(updatedTodos[0].completed).toEqual(false); // When toggling a completed todo it should be incomplete.
			expect(updatedTodos[0].completedAt).toEqual(undefined); // Completed at date turns to undefined when its incompleted	

			// Toggle it back
			var res = reducers.todosReducer(df(updatedTodos), df(ToggleAction));
			expect(res.length).toEqual(1); // Shouldn't have removed it
			expect(res[0].text).toEqual(todos[0].text); // Shouldn't have changed the todo
			expect(res[0].completed).toEqual(true); // Completed todo should be incompleted
			expect(res[0].completedAt).toNotEqual(undefined); // CompletedAt date should now be undefined

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
	});
	
});