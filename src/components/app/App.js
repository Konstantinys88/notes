import './App.scss';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import NotesList from '../notes-list/notes-list';
import NotesAddForm from '../notes-add-form/notes-add-form';

import { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ notes: "Проснутся", priority: 70, increase: false, id: 1, like: false },
				{ notes: "Покормить кота", priority: 70, increase: false, id: 2, like: false },
				{ notes: "Погладить кота", priority: 90, increase: true, id: 3, like: false },
				{ notes: "Помыть посуду", priority: 50, increase: false, id: 4, like: true },
			],
			term: '',
			filter: 'all',
		}
		this.maxId = 5
	}

	addItem = (notes, priority) => {
		const newItem = {
			notes,
			priority,
			id: this.maxId++,
			increase: false,
			like: false,
		}
		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		});
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}

	onToggleIncrease = (id) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, increase: !item.increase }
				}
				return item;
			})
		}))
	}

	onToggleLike = (id) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, like: !item.like }
				}
				return item;
			})
		}))
	}

	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter(item => {
			return item.notes.indexOf(term) > -1;
		})
	}

	onUpdateSearchApp = (term) => {
		this.setState({ term: term })
	}

	filterPost = (items, filter) => {
		switch (filter) {
			case 'like':
				return items.filter(item => item.like);
			case "moreThen100":
				return items.filter(item => item.priority > 50);
			default:
				return items;
		}
	}

	onFilterSelect = (filter) => {
		this.setState({filter});
	}


	render() {
		const { data, term, filter } = this.state;

		const notes = this.state.data.length;
		const increased = this.state.data.filter(item => item.increase).length;
		const visibleData = this.filterPost(this.searchEmp(data, term), filter);

		// const visibleData = this.searchEmp(data, term);

		return (
			<div className="app">
				<AppInfo
					notes={notes}
					increased={increased}
				/>
				<div className="app__search">
					<SearchPanel onUpdateSearchApp={this.onUpdateSearchApp} />
					<AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
				</div>
				<NotesList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleIncrease={this.onToggleIncrease}
					onToggleLike={this.onToggleLike} />
				<NotesAddForm onAddItem={this.addItem} />
			</div>
		);

	}
}

export default App;
