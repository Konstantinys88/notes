import "./notes-list.scss";

import NotesListItem from "../notes-list-item/notes-list-item"

const NotesList = () => {
    return (
        <ul className="app-list list-group">
            <NotesListItem/>
            <NotesListItem/>
            <NotesListItem/>
        </ul>
    )
}

export default NotesList;