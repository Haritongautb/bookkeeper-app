import { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullName: "",
            salary: ""
        };
    }

    onChangeInputValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onAddEmloyee = (event) => {
        event.preventDefault();

        if (!this.state.fullName || !this.state.salary) {
            return;
        } else {
            this.props.onAdd(this.state);
            this.setState({
                fullName: "",
                salary: ""
            })
        }
    }

    render() {
        const { fullName, salary } = this.state;
        return (
            <div className="app-add-form">
                <h3>Add a new employee</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="What is his/her name?"
                        value={fullName}
                        name="fullName"
                        onChange={this.onChangeInputValue} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salary in dollars?"
                        value={salary}
                        name="salary"
                        onChange={this.onChangeInputValue} />

                    <button type="submit"
                        className="btn btn-outline-light"
                        onClick={this.onAddEmloyee}>Add</button>
                </form>
            </div>
        );
    }
};


export default EmployeesAddForm;