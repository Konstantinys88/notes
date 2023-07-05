import './App.scss';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import NotesList from '../notes-list/notes-list';
import NotesAddForm from '../notes-add-form/notes-add-form';




function App() {

	const data = [
		{notes: "Проснутся" , priority: 70, increase: false, id: 1, like: false}, 
		{notes: "Покормить кота" , priority: 70, increase: false, id: 2, like: false}, 
		{notes: "Погладить кота" , priority: 90, increase: true, id: 3, like: false},
		{notes: "Помыть посуду" , priority: 50, increase: false, id: 4, like: true},
	];

	return (
		<div className="app">
			<AppInfo />
			<div className="app__search">
				<SearchPanel />
				<AppFilter />
			</div>
			<NotesList data={data}/>
			<NotesAddForm />
		</div>
	);
}

export default App;
