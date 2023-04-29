import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";


const EmployeesList = ({workersData, onDelete, onChangeProp, onChangeSalary}) => {
    const elements = workersData.map((item, index) => 
    <EmployeesListItem name={item.name} 
                        salary={item.salary} 
                        key={index} 
                        increase={item.increase}
                        like={item.rise}
                        onDelete={() => onDelete(index)}
                        onChangeProp={(event) => onChangeProp(index, event.target.dataset.prop)}
                        onChangeSalary={(event) => onChangeSalary(index, event.target.value, workersData)}/>)

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
};


export default EmployeesList;