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

    const handleUpdateTask = (task) => {
        let _idx = taskData.findIndex(x=>x.id === task.id);
        if (_idx !== -1) {
            let temp = taskData;
            let _thisTask = temp[_idx];
            _thisTask = task;
            temp[_idx] = _thisTask;
            setTaskData([...temp]);
        }
    }

    return (
        <div className="App">
            <NewTask handleAddTask={handleAddTask}/>
            <TodoList TaskData={taskData}  handleUpdateTask={handleUpdateTask}/>
        </div>
    );
}

export default App;
