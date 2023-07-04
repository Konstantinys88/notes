import "./app-filter.scss";

const AppFilter = () => {
    return (
        <div className="btns">
            <button className="btns__btn btns__btn--activ" type="button">Все заметки</button>
            <button className="btns__btn" type="button">Высокий приоритет</button>
            <button className="btns__btn" type="button">Выжные</button>
        </div>
    )
}

export default AppFilter;