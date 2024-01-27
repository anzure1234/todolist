import '../App.css';
import {useEffect, useState} from "react";
const FormBody = () => {
    const today = new Date().toISOString().split("T")[0];
    const [task,setTask] = useState();
    const [description,setDescription] = useState();
    const [dueDate,setDueDate] = useState(today);
    const [priority,setPriority] = useState("normal");
    let [taskList,setTaskList] = useState([]);

    const handleInput= (e) => {
        const input = e.target.value;
        setTask(input);
    }
    const handleDescription= (e) => {
        const input = e.target.value;
        setDescription(input);
    }
    const handleDueDate= (e) => {
        const input = e.target.value;
        setDueDate(input);
    }
    const handlePriority= (e) => {
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
        setTaskList([...taskList,newTask]);
    }

    useEffect(() => {
        console.log(taskList);
    }, [taskList]);


  return (
    <div className="form-body">
        <input type="text" placeholder="Add new Task" className="full-width" onChange={handleInput}/>
        <h5>Description</h5>
        <textarea rows="20" onChange={handleDescription}></textarea>
        <div className="info-input">
            <div className="info-item">
                <h5>Due Date</h5>
                <input type="date" min={today} onChange={handleDueDate} />
            </div>
            <div className="info-item">
                <h5>Priority</h5>
                <select value={priority} onChange={handlePriority}>
                    <option>low</option>
                    <option>normal</option>
                    <option>high</option>
                </select>
            </div>
        </div>
        <br/>
        <button type="Submit" className="submit-btn" onClick={handleAdd}>Add</button>
    </div>
  );
}
export default FormBody;