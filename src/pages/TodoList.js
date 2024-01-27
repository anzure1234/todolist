import FormBody from "./FormBody";
import '../App.css';
import Task from "./Task";

const TodoList = () => {
    return<div className="container-full">
            <div className="container">
                <h2>TodoList</h2>
                <input type="text" placeholder="Search..."/>
                <Task/>

                <FormBody/>
            </div>
        </div>



}
export default TodoList;