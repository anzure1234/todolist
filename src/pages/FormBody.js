import '../App.css';
import {useEffect, useState} from "react";
import {uuidv4} from "../common/common";

const FormBody = (props) => {


    const {handleUpdateTask,TaskData,isUpdate    } = props;

    const today = new Date().toISOString().split("T")[0];
    const [task, setTask] = useState(props?.task);
    const [description, setDescription] = useState();
    const [dueDate, setDueDate] = useState(today);
    const [priority, setPriority] = useState("normal");
    let [taskList, setTaskList] = useState([]);


    const handleInput = (e, prop) => {
        const value = e.target.value;
        setTask(prev => ({
            ...prev,
            [prop]: value
        }))
    }

    const handleDueDate = (e) => {
        let input = e.target.value;
        setDueDate(input);
    }
    const handlePriority = (e) => {
        const input = e.target.value;
        setPriority(input);
    }
    const handleAdd = () => {
        TaskData.handleAddTask({
            ...task,
            id: uuidv4()
        });
    }

    const handleUpdate = () => {
        if (handleUpdateTask ) {
            handleUpdateTask(task);
        }
    }

    return (
        <div className="form-body">
            <input value={task?.task} type="text" placeholder={props.isUpdate ? props.task.task : "Add new Task"} className="full-width"
                   onChange={(e) => handleInput(e, "task")}/>
            <h5>Description</h5>
            <textarea value={task?.description} rows="20" onChange={(e) => handleInput(e, "description")} placeholder={props.isUpdate?props.task.description:""}></textarea>
            <div className="info-input">
                <div className="info-item">
                    <h5>Due Date</h5>
                    {isUpdate ? <input type="date" min={today} value={props.task.dueDate} onChange={handleDueDate}/> :
                        <input type="date" min={today} value={dueDate} onChange={handleDueDate}/>}
                </div>
                <div className="info-item">
                <h5>Priority</h5>
                    {isUpdate ?
                        <select value={props.task.priority} onChange={handlePriority}>
                        <option>low</option>
                        <option>normal</option>
                        <option>high</option>
                    </select> :
                        <select value={priority} onChange={handlePriority}>
                        <option>low</option>
                        <option>normal</option>
                        <option>high</option>
                        </select>}
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