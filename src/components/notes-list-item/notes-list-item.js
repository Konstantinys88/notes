import { Component } from "react";

import "./notes-list-item.scss";


class NotesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false,
        }
    }

    // onIncrease = () => {
    //     this.setState(({increase}) => ({
    //         increase: !increase
    //     }))
    // }

    onIncrease = () => {
        this.setState(state => ({
            increase: !state.increase
        }))
    }

    onLike = () => {
        this.setState(state => ({
            like: !state.like
        }))
    }

    render() {
        const { notes, priority } = this.props;
        const {increase, like} = this.state;

        let classNameLi = "list-group-item d-flex justify-content-between";

        if (increase) {
            classNameLi += " increase"
        }

        if (like) {
            classNameLi += " like"
        }

        return (
            <li className={classNameLi}>
                <span onClick={this.onLike} className="list-group-item-label">{notes}</span>
                <input type="number" className="list-group-item-input" defaultValue={priority} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button type="button"
                        className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default NotesListItem;