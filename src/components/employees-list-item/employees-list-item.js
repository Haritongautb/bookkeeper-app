import {Component} from "react";

import "./employees-list-item.css";

class EmployeesListItem extends Component{
    constructor(props){
        super(props)

        this.state = {
            increase: false,
            like: false
        };  
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    onIncrease = () => {
        this.setState(state => ({
            increase: !state.increase
        }))
    }

    render(){
        const {name, salary, onDelete, onChangeProp, increase, like, onChangeSalary} = this.props;

        let defaultClassName = "list-group-item d-flex justify-content-between";

        if(increase){
            defaultClassName += " increase";
        }
        if(like){
            defaultClassName += " like"
        }

        return (
            <li className={defaultClassName}>
                <span className="list-group-item-label"                         
                        data-prop="rise"
                        onClick={onChangeProp}>{name}</span>
                <input type="text" 
                        className="list-group-item-input" 
                        value={salary + "$"}
                        onChange={onChangeSalary}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm"
                        data-prop="increase"
                        onClick={onChangeProp}>
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



};


export default EmployeesListItem;