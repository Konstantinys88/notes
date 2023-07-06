import "./notes-list.scss";

import NotesListItem from "../notes-list-item/notes-list-item"

const NotesList = ({ data, onDelete }) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <NotesListItem 
            key={id} 
            {...itemProps} 
            onDelete={() => onDelete(id)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default NotesList;