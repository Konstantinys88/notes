import "./notes-add-form.scss";

const NotesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавить новую заметку</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Заметка" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Выжность ?" />

                <button type="submit"
                    className="btns__btn">Добавить</button>
            </form>
        </div>
    )
}

export default NotesAddForm;