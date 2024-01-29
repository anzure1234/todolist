import '../App.css';
import {useEffect, useState} from "react";
import {uuidv4} from "../common/common";

const FormBody = (props) => {
    console.log(props);


    const {handleUpdateTask, TaskData, isUpdate} = props;

    const today = new Date().toISOString().split("T")[0];
    const [task, setTask] = useState(props?.task);
    const [dueDate, setDueDate] = useState(today);
    const [priority, setPriority] = useState("normal");


    const handleInput = (e, prop) => {
        const value = e.target.value;
        setTask(prev => ({
            ...prev,
            [prop]: value
        }))
    }

    const handleAdd = () => {
        TaskData.handleAddTask({
            ...task,
            id: uuidv4()
        });
    }

    const handleUpdate = () => {
        if (handleUpdateTask) {
            handleUpdateTask(task);
        }
    }

    return (
        <div className="form-body">
            <input value={task?.task} type="text" placeholder="Add new Task" className="full-width"
                   onChange={(e) => handleInput(e, "task")}/>
            <h5>Description</h5>
            <textarea value={task?.description} rows="20" onChange={(e) => handleInput(e, "description")}></textarea>
            <div className="info-input">
                <div className="info-item">
                    <h5>Due Date</h5>
                    <input type="date" min={today} value={task?.dueDate} onChange={(e) => handleInput(e, "dueDate")}/>
                </div>
                <div className="info-item">
                    <h5>Priority</h5>
                    <select value={task?.priority} onChange={(e) => handleInput(e, "priority")}>
                        <option>low</option>
                        <option>normal</option>
                        <option>high</option>
                    </select>
                </div>
            </div>
            <br/>
            {isUpdate ? <button type="Submit" className="submit-btn" onClick={handleUpdate}>Update</button> :
                <button type="Submit" className="submit-btn" onClick={handleAdd}>Add</button>
            }
        </div>
    );
}
export default FormBody;