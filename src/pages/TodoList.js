import FormBody from "./FormBody";
import '../App.css';
import Task from "./Task";
import BulkAction from "./BulkAction";
import {useState} from "react";

const TodoList = (props) => {




    const tasks =  props.TaskData.map((task, idx) => {
        return <Task task={task} idx={idx}/>
    });

    return<div className="container-full">
            <div className="container">
                <h2>TodoList</h2>
                <input type="text" placeholder="Search..."/>
                {tasks}


            </div>
        </div>



}
export default TodoList;