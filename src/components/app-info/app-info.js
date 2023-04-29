import "./app-info.css"
const titleColor = () => {
    return "#f39c12"
}

const AppInfo = ({workersRise, workersCount}) => {
    return (

        <div className="app-info">
            <h1>Учет сотрудников в компании <span style={{"color" : titleColor()}}>"Kasia kocha BIGLs"</span></h1>
            <h2>Общее число сотрудников: {workersCount}</h2>
            <h2>Премию получат: {workersRise}</h2>
        </div>        
    );
};


export default AppInfo;