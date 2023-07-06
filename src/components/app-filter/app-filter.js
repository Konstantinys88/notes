import "./app-filter.scss";

const AppFilter = (props) => {

    const buttonsData = [
        { name: "all", label: "Все заметки" },
        { name: "moreThen100", label: "Высокий приоритет" },
        { name: "like", label: "Выжные" },
    ];

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? "btns__btn--active": "btns__btn";

        return (
            <button
                className={`btns__btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btns">
            {buttons}
        </div>
    )
}

export default AppFilter;