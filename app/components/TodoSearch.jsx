var React = require('react');

var TodoSearch = React.createClass({
	
	handleSearch: function() {
		var showCompleted = this.refs.showCompleted.checked;
		var searchText = this.refs.searchText.value;

		/* Even if it's empty we want to pass upstream. For example, if you type the letter 'a', but then remove it the lists will need to rerender as nothing is being filtered. */
		this.props.onSearch(showCompleted, searchText);
	},
	
	render: function() {
		return (
			<div className="container__header">
				<div>
					<input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
				</div>
				<div>
					<label>
						<input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
						Show completed todos
					</label>
				</div>
			</div>
		)
	}
});

module.exports = TodoSearch;