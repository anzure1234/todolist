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
        localStorage.setItem("tasks", JSON.stringify([...taskData,task]));
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
            localStorage.removeItem("tasks");
            localStorage.setItem("tasks", JSON.stringify([...temp]));
            setTaskData([...temp]);
        }
    }
    const handleDeleteBulkTask = () =>{
        const updatedTaskData = taskData.filter(task => {
            return !selectedTasks.find(selectedTask => selectedTask.id === task.id);
        });
        setTaskData(updatedTaskData);
        localStorage.removeItem("tasks");
        localStorage.setItem("tasks", JSON.stringify([...updatedTaskData]));
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
