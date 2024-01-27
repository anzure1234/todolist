import FormBody from "./FormBody";

const Task = (props) => {

    const checkboxHandle = (e) => {
        props.setIsCheck(e.target.checked);
    }
    const detailHandle = (e) => {
        props.setIsDetail(prevState => !prevState);
    }

    return <div className="task-detail">
        <div className="task-detail-item">
            <input type="checkbox" defaultChecked="false" onChange={checkboxHandle}/>
            <h4>Do Home Work</h4>
        </div>
        <div className="task-detail-item">
            <button className="detail-btn" onClick={detailHandle}>Detail</button>
            <button className="remove-btn">Remove</button>
        </div>

    </div>
}
export default Task;