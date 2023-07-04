import "./notes-list.scss";

import NotesListItem from "../notes-list-item/notes-list-item"

const NotesList = ({ data }) => {

    const elements = data.map(item => {
        return (
            // <NotesListItem notes={item.notes} priority={item.priority} />
            <NotesListItem {...item} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default NotesList;