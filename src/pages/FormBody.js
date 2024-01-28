import '../App.css';
import {useEffect, useState} from "react";

const FormBody = (props) => {

    console.log(props);

    const today = new Date().toISOString().split("T")[0];
    const [task, setTask] = useState();
    const [description, setDescription] = useState();
    const [dueDate, setDueDate] = useState(today);
    const [priority, setPriority] = useState("normal");
    let [taskList, setTaskList] = useState([]);


    const handleInput = (e) => {
        const input = e.target.value;
        setTask(input);
    }
    const handleDescription = (e) => {
        const input = e.target.value;
        setDescription(input);
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
        const newTask = {
            task: task,
            description: description,
            dueDate: dueDate,
            priority: priority
        }
        props.TaskData.handleAddTask(newTask);
    }

    // const handleUpdate = () => {
    //     const newTask = {
    //         task: task,
    //         description: description,
    //         dueDate: dueDate,
    //         priority: priority
    //     }
    //     props.TaskData.filter((task,idx) => {
    //         if(idx === props.task.id){
    //             props.TaskData = [...props.TaskData, newTask];
    //         }
    //     })
    // }

    return (
        <div className="form-body">
            <input type="text" placeholder={props.isUpdate ? props.task.task : "Add new Task"} className="full-width"
                   onChange={handleInput}/>
            <h5>Description</h5>
            <textarea rows="20" onChange={handleDescription} placeholder={props.isUpdate?props.task.description:""}></textarea>
            <div className="info-input">
                <div className="info-item">
                    <h5>Due Date</h5>
                    {props.isUpdate ? <input type="date" min={today} value={props.task.dueDate} onChange={handleDueDate}/> :
                        <input type="date" min={today} value={dueDate} onChange={handleDueDate}/>}
                </div>
                <div className="info-item">
                <h5>Priority</h5>
                    {props.isUpdate ?
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
            {props.isUpdate ? <button type="Submit" className="submit-btn" onClick={handleUpdate}>Update</button> :
                <button type="Submit" className="submit-btn" onClick={handleAdd}>Add</button>
            }
        </div>
    );
}
export default FormBody;