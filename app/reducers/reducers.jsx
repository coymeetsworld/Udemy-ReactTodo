var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
	//action.something = 2; /* Illegal in pure functions, deep-freeze-strict would catch this and fail the test. */
	switch(action.type) {
		case 'SET_SEARCH_TEXT':
			return action.searchText;
		default:
			return state;
	};	
};

export var showCompletedReducer = (state = false, action) => {
	switch(action.type) {
		case 'TOGGLE_SHOW_COMPLETED':
			return !state;			
		default:
			return state;
	};
};

export var todosReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				action.todo
			];	
		case 'UPDATE_TODO':
			return state.map((todo) => {
				if (todo.id === action.id) {
					/* All work previously here is now done in our asynchronous action inside startToggleTodo in actions.jsx. */
					return {
						...todo,
						...action.updates
					};
				}	
				return todo;
			});
		case 'ADD_TODOS': 
			return [
				...state,
				...action.todos	
			];
		default:
			return state;	
	}
};