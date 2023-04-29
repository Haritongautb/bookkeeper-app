import {Component} from "react";

import "./search-panel.css";

class SearchPanel extends Component{
    constructor(props) {
        super(props)

        this.state = {
            term: ""
        }
    }

    onChangeTerm = (event) => {
        const term = event.target.value;
        this.setState({term})
        this.props.onChangeTerm(term);
    }

    render() {
        const {term} = this.state;
        return (
            <input type="text" 
                className="form-control search-input" 
                placeholder="Найти сотрудника"
                value={term}
                onChange={this.onChangeTerm}/>
        )
    }
};

export default SearchPanel;