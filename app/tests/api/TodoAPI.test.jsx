var expect    = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
	beforeEach(() => {
		localStorage.removeItem('todos');
	});
	
	
	it('should exist', () => {
		expect(TodoAPI).toExist();
	});
	
	describe('setTodos', () => {
		it('should set valid todos array', () => {
			var todos = [{
				id: 23,
				text: 'test all files',	
				completed: false
			}];	
			TodoAPI.setTodos(todos);
			var actualTodos = JSON.parse(localStorage.getItem('todos'));

			/* Use toEqual to compare values in 2 objects, toBe compares 2 references. */		
			expect(actualTodos).toEqual(todos);
			
		});


		it('should not set invalid todos array', () => {
			var badTodos = { a: 'b' };
			TodoAPI.setTodos(badTodos);
			
			var actualTodos = JSON.parse(localStorage.getItem('todos'));
			expect(localStorage.getItem('todos')).toBe(null);
		});
		
	});

	describe('getTodos', () => {
		it('should return empty array for bad localstorage data', () => {
			var actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual([]);		
		});
		

		it('should return todos if valid array in localstorage', () => {
			var todos = [{
				id: 23,
				text: 'test all files',	
				completed: false
			}];	
			
			localStorage.setItem('todos', JSON.stringify(todos));
			var actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual(todos);
		});
		
	});
});
