var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

//export so we can test w/o passing in state?
export var TodoSearch = React.createClass({

	//now our application works by dispatching one method which has both showCompleted and searchText.
	//were going to be dispatching our 2 separate actions (inside of the actions.jsx file, our setSearchText and toggleShowCompleted actions)
	/*handleSearch: function() {
		var showCompleted = this.refs.showCompleted.checked;
		var searchText = this.refs.searchText.value;

		// Even if it's empty we want to pass upstream. For example, if you type the letter 'a', but then remove it the lists will need to rerender as nothing is being filtered.
		this.props.onSearch(showCompleted, searchText);
	},*/
	

	render: function() {
		var {dispatch, showCompleted, searchText} = this.props;
		
		return (
			<div className="container__header">
				<div>
					<input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
						var searchText = this.refs.searchText.value;
						dispatch(actions.setSearchText(searchText));
					}}/>
				</div>
				<div>
					<label>
						<input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
							dispatch(actions.toggleShowCompleted());
						}}/>
						Show completed todos
					</label>
				</div>
			</div>
		)
	}
});

//module.exports = TodoSearch;
export default connect(
	(state) => {
		return {
			showCompleted: state.showCompleted,
			searchText: state.searchText
		}	
	}
)(TodoSearch);