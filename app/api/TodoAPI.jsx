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
	}
};