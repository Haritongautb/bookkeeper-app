import {Component} from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css";

class App extends Component{

    constructor(props) {
        super(props)

        this.state = {
            workersData: [
                {name: "Hariton Tran", salary: 1000, increase: true, rise: false},
                {name: "Kasia Kulyk", salary: 5000, increase: true, rise: true},
                {name: "Basia Samarska", salary: 1000, increase: false, rise: false}
            ],
            term: "",
            filter: ""
        };
    }


    onDelete = (index) => {
        this.setState(({workersData}) => ({
            workersData: workersData.filter((item, i) => i !== index)
        }))
    }

    onAdd = ({fullName, salary}) => {
        const newEmployee= {
            name: fullName.split(/\s+/).map(item => item[0].toUpperCase() + item.slice(1)).join(" "),
            salary: salary,
            increase: false, 
            rise: false  
        }
 
        this.setState(({workersData}) => ({
            workersData: [...workersData, newEmployee]
        }))
    }

    onChangeProp = (index, prop) => {
        console.log(index, prop);
        this.setState(({workersData}) => {
            return {
                workersData: workersData.map((item, i) => {
                    if(i === index){
                        return {...item, [prop]: !item[prop]}
                    }
                    return item;
                })
            }
        })
    }

    onChangeSalary = (index, salary, data) => {
        const filterSalary = salary.replace(/\D/gi, "");
        const newWorkersData = data.map((item, i) => {
            if(i === index){
                return {...item, salary: filterSalary}
            }
            return item
        })

        this.setState(() => ({
            workersData: newWorkersData
        }))
    }

    searchEmp(items, term){
        if(term.length === 0){
            return items;
        }

        return items.filter(item => item.name.indexOf(term) > -1);
    }

    onChangeTerm = (term) => {
        this.setState({term});
    }

    updateEmpByCategories = (items, filter) => {
        switch (filter){
            case "moreThen1000": 
                return items.filter(item => item.salary >= 1000);
            case "rise": 
                return items.filter(item => item.rise);
            default: 
                return items;
        }
    }

    onChangeFilter = (filter) => {
        this.setState({filter});
    }

    render() {
        const {workersData, term, filter} = this.state;

        const workersCount = this.state.workersData.length;
        const workersRise = this.state.workersData.filter(item => item.rise).length;
        const visibleEmp = this.updateEmpByCategories(this.searchEmp(workersData, term), filter);

        return(
            <div className="app">
                <AppInfo workersCount={workersCount} workersRise={workersRise}/>
    
                <div className="search-panel">
                    <SearchPanel onChangeTerm={this.onChangeTerm}/> 
                    <AppFilter filter={filter} onChangeFilter={this.onChangeFilter}/>
                </div>
    
                <EmployeesList workersData={visibleEmp} onDelete={this.onDelete} onChangeProp={this.onChangeProp} onChangeSalary={this.onChangeSalary}/>
                <EmployeesAddForm onAdd={this.onAdd}/>
            </div>
        );
    }
}

export default App;