import moment from 'moment';
import firebase, {firebaseRef} from 'app/firebase/'; /* if name is index.js, you don't need to specify the file */

export var setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	};
};

export var addTodo = (todo) => {
	return {
		type: 'ADD_TODO',
		todo	
	};
};

export var startAddTodo = (text) => {
	return (dispatch, getState) => {
		var todo = {
			text,
			completed: false,
			createdAt: moment().unix(),
			completedAt: null
		};
		var todoRef = firebaseRef.child('todos').push(todo);
		
		return todoRef.then(() => {
			/* After firebase work is done, update view */
			dispatch(addTodo({
				...todo,
				id: todoRef.key	
			}));
		});
	};	
};

export var addTodos = (todos) => {
	return {
		type: 'ADD_TODOS',
		todos
	};
};

export var toggleShowCompleted = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	};
};

export var toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	};	
};