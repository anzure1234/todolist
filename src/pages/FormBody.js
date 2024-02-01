import '../App.css';
import {useContext, useEffect, useState} from "react";
import {uuidv4} from "../common/common";
import {AppContext} from "../App";

const FormBody = (props) => {

    const _context = useContext(AppContext);
    console.log("_context", _context);


    const {handleUpdateTask, TaskData} = _context;

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
        _context.handleAddTask({
            ...task,
            id: uuidv4()
        });
        setTask({
            task: "",
            description: "",
            dueDate: "",
            priority: "normal"
        })

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
            {props.isUpdate ? <button type="Submit" className="submit-btn" onClick={handleUpdate}>Update</button> :
                <button type="Submit" className="submit-btn" onClick={handleAdd}>Add</button>
            }
        </div>
    );
}
export default FormBody;