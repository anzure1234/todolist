import logo from './logo.svg';
import './App.css';
import NewTask from "./pages/NewTask";
import Task from "./pages/Task";
import TodoList from "./pages/TodoList";
import {useEffect, useState} from "react";

function App() {
    const [taskData,setTaskData]= useState([]);
    const [selectedTasks,setSelectedTasks] = useState([]);
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
    const handleDeleteTask= (task) => {
        let _idx = taskData.findIndex(x=>x.id === task.id);
        if (_idx !== -1) {
            let temp = taskData;
            temp.splice(_idx, 1);
            setTaskData([...temp]);
        }
    }
    const handleDeleteBulkTask = () =>{
        setTaskData(taskData.filter(task => !selectedTasks.includes(task)));
        setSelectedTasks([]);
    }
    const handleSelectedTask = (task) =>{
        if (selectedTasks.includes(task)) {
            setSelectedTasks(selectedTasks.filter(t => t !== task));
        } else {
            setSelectedTasks([...selectedTasks, task]);
        }
    }



    return (
        <div className="App">
            <NewTask handleAddTask={handleAddTask}/>
            <TodoList TaskData={taskData}  handleUpdateTask={handleUpdateTask} handleDeleteTask={handleDeleteTask} handleDeleteBulkTask={handleDeleteBulkTask} handleSelectedTask={handleSelectedTask}/>
        </div>
    );
}

export default App;
