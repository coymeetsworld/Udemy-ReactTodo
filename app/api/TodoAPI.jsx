var $ = require('jquery');

module.exports = {
	setTodos: function(todos) {
		if ($.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos));	
			return todos; /* this allows someone to validate setTodos worked with valid data. */
		}	
	},
	getTodos: function() {
		var stringTodos = localStorage.getItem('todos');	
		var todos = [];
		
		try {
			todos = JSON.parse(stringTodos);	
		} catch (e) {

		}

		/* Just to validate that the data is not malicious, we expect an array. */	
		return $.isArray(todos) ? todos : [];
	},
	
	filterTodos: function (todos, showCompleted, searchText) {
		var filteredTodos = todos;
		
		// Filter by showCompleted
		filteredTodos = todos.filter((todo) => {
			return !todo.completed || showCompleted;
		});
		
		// Filter by searchText
		if (searchText.length > 0) {
			filteredTodos = filteredTodos.filter((todo) => {
				return todo.text.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ? true : false;
			});
		}
		
		// Sort todos with non-completed first
		filteredTodos.sort((a, b) => {
			if (!a.completed && b.completed) { return -1; }		
			else if (a.completed && !b.completed) { return 1; }
			return 0;
		});

		return filteredTodos;
	}
};