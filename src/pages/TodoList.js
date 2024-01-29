import FormBody from "./FormBody";
import '../App.css';
import Task from "./Task";
import BulkAction from "./BulkAction";
import {useContext, useState} from "react";
import {AppContext} from "../App";

const TodoList = () => {

    const _context = useContext(AppContext);
    const [isCheck, setIsCheck] = useState(false);


    const tasks =  _context.taskData?.map((task,idx) => {
        return <Task task={task} idx={idx} setIsCheck={setIsCheck}/>
    });

    return<div className="container-full">
            <div className="container">
                <h2>TodoList</h2>
                <input type="text" placeholder="Search..."/>
                {tasks}
                {isCheck && <BulkAction/>}
            </div>
        </div>



}
export default TodoList;