import './App.scss';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import NotesList from '../notes-list/notes-list';
import NotesAddForm from '../notes-add-form/notes-add-form';




function App() {
	return (
		<div className="app">
			<AppInfo />
			<div className="app__search">
				<SearchPanel />
				<AppFilter />
			</div>
			<NotesList />
			<NotesAddForm />
		</div>
	);
}

export default App;
