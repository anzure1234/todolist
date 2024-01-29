import FormBody from "./FormBody";
import '../App.css';
import Task from "./Task";
import BulkAction from "./BulkAction";
import {useState} from "react";

const TodoList = (props) => {
    const [isCheck, setIsCheck] = useState(false);

    let taskList = JSON.parse(localStorage.getItem("tasks"));

    const tasks =  taskList?.map((task,idx) => {
        return <Task task={task} {...props} idx={idx} setIsCheck={setIsCheck}/>
    });

    return<div className="container-full">
            <div className="container">
                <h2>TodoList</h2>
                <input type="text" placeholder="Search..."/>
                {tasks}
                {isCheck && <BulkAction handleDeleteBulkTask={props.handleDeleteBulkTask}/>}
            </div>
        </div>



}
export default TodoList;