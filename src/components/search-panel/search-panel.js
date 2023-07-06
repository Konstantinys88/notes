import { Component } from "react";
import "./search-panel.scss";


class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearchApp(term);
    }

    render() {
        return (
            <input
                type="text"
                className="search-panel"
                placeholder="Найти заметку"
                value={this.state.term}
                onChange={this.onUpdateSearch}
            />
        )
    }
}

export default SearchPanel;