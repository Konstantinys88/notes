import "./app-info.scss"

const AppInfo = ({notes, increased}) => {
    return (
        <div className="app-info">
            <h1>Мои заметки</h1>
            <h2>Всего заметок: {notes}</h2>
            <h2>Выжные заметки: {increased} </h2>
        </div>
    )
}

export default AppInfo;