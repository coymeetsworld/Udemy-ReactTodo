
export var searchTextReducer = (state = '', action) => {
	//action.something = 2; /* Illegal in pure functions, deep-freeze-strict would catch this and fail the test. */
	switch(action.type) {
		case 'SET_SEARCH_TEXT':
			return action.searchText;
		default:
			return state;
	};	
};

//switch statement TOGGLE_SHOW_COMPLETED, if true toggle the value showCompleted
export var showCompletedReducer = (state = false, action) => {
	switch(action.type) {
		case 'TOGGLE_SHOW_COMPLETED':
			return !state;			
		default:
			return state;
	};
};