import "./notes-list.scss";

import NotesListItem from "../notes-list-item/notes-list-item"

const NotesList = ({ data, onDelete, onToggleIncrease, onToggleLike }) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <NotesListItem 
            key={id} 
            {...itemProps} 
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleLike={() => onToggleLike(id)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default NotesList;