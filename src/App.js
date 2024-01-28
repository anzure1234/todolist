import logo from './logo.svg';
import './App.css';
import NewTask from "./pages/NewTask";
import Task from "./pages/Task";
import TodoList from "./pages/TodoList";
import {useState} from "react";

function App() {
    const [taskData,setTaskData]= useState([]);


    const handleAddTask = (task) => {
        setTaskData([...taskData,task]);
    }


    return (
        <div className="App">
            <NewTask handleAddTask={handleAddTask}/>
            <TodoList TaskData={taskData} />
        </div>
    );
}

export default App;
