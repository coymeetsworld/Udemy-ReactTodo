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
	
});