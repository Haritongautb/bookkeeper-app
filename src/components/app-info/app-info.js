import "./app-info.css"
const titleColor = () => {
    return "#f39c12"
}

const AppInfo = ({ workersRise, workersCount }) => {
    return (

        <div className="app-info">
            <h1>Accounting of employees in the company: <span style={{ "color": titleColor() }}>"Beagles"</span></h1>
            <h2>Total number of employees: {workersCount}</h2>
            <h2>The award will be received: {workersRise}</h2>
        </div>
    );
};


export default AppInfo;