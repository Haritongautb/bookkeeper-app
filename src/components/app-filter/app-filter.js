import "./app-filter.css";

const AppFilter = (props) => {

    const buttonsData = [
        { name: "all", label: "All employees" },
        { name: "rise", label: "For promotion" },
        { name: "moreThen1000", label: "salary is more than 1000$" }
    ];

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? "btn btn-light" : "btn btn-outline-light";
        return <button type="button" key={name} className={clazz} onClick={() => props.onChangeFilter(name)}>{label}</button>
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
};

export default AppFilter;
