import FormBody from "./FormBody";

const Task = () => {

    return <div className="task-detail">
        <div className="task-detail-item">
            <input type="checkbox" defaultChecked="true"/>
            <h4>Do Home Work</h4>
        </div>
        <div className="task-detail-item">
            <button className="detail-btn">Detail</button>
            <button className="remove-btn">Remove</button>
        </div>

    </div>
}
export default Task;