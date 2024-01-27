import FormBody from "./FormBody";
import '../App.css';
import Task from "./Task";
import BulkAction from "./BulkAction";
import {useState} from "react";

const TodoList = () => {
    const [isCheck,setIsCheck] = useState(false);
    const [isDetail,setIsDetail] = useState(false);

    return<div className="container-full">
            <div className="container">
                <h2>TodoList</h2>
                <input type="text" placeholder="Search..."/>
                <Task setIsCheck={setIsCheck} setIsDetail ={setIsDetail}/>
                {isDetail &&<FormBody />}

                {isCheck &&<BulkAction/>}
            </div>
        </div>



}
export default TodoList;