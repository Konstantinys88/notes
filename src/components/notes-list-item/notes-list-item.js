// import { Component } from "react";

import "./notes-list-item.scss";


const NotesListItem = (props) => {

    const { notes, priority, onDelete, onToggleIncrease, onToggleLike, increase, like } = props;

    let classNameLi = "list-group-item d-flex justify-content-between";

    if (increase) {
        classNameLi += " increase"
    }

    if (like) {
        classNameLi += " like"
    }

    return (
        <li className={classNameLi}>
            <span onClick={onToggleLike} className="list-group-item-label">{notes}</span>
            <input type="number" className="list-group-item-input" defaultValue={priority} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}


export default NotesListItem;