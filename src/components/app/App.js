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
			// term: '',
			// filter: 'all',
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

	render() {
		const { data } = this.state;
		return (
			<div className="app">
				<AppInfo />
				<div className="app__search">
					<SearchPanel />
					<AppFilter />
				</div>
				<NotesList data={data} onDelete={this.deleteItem} />
				<NotesAddForm onAddItem={this.addItem} />
			</div>
		);

	}
}

export default App;
