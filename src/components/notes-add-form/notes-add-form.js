import { Component } from "react";
import "./notes-add-form.scss";


class NotesAddForm extends Component {

    state = {
        notes: "",
        priority: "",
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.notes < 2 || this.state.priority <= 0) return
        this.props.onAddItem(this.state.notes, this.state.priority);
        this.setState({
            notes: "",
            priority: "",
        })
    }

    render() {
        const { notes, priority } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавить новую заметку</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>

                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Заметка"
                        name="notes"
                        value={notes}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Выжность ?"
                        name="priority"
                        value={priority}
                        onChange={this.onValueChange} />

                    <button type="submit"
                        className="btns__btn">Добавить</button>
                </form>
            </div>
        )
    }
}

export default NotesAddForm;