import logo from './logo.svg';
import './App.css';
import NewTask from "./pages/NewTask";
import Task from "./pages/Task";
import TodoList from "./pages/TodoList";
import {createContext, useEffect, useState} from "react";
import task from "./pages/Task";
export const AppContext = createContext(null);

function App() {

    const [taskData,setTaskData]= useState([]);
    const [selectedTasks,setSelectedTasks] = useState([]);


    useEffect(()=>{
        const getTasks = localStorage.getItem("tasks");
        setTaskData(JSON.parse(getTasks));
    },[])


    const handleAddTask = (task) => {
        setTaskData([...taskData,task]);
        localStorage.setItem("tasks", JSON.stringify([...taskData,task]));
    }
    console.log(taskData)
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


    const props = {
        taskData: taskData,
        handleSelectedTask: handleSelectedTask,
        handleDeleteBulkTask:handleDeleteBulkTask,
        handleDeleteTask:handleDeleteTask,
        handleUpdateTask:handleUpdateTask,
        handleAddTask:handleAddTask
    }

    return (
        <AppContext.Provider value={props}>
            <div className="App">
                <NewTask/>
                <TodoList TaskData={taskData}/>
            </div>
        </AppContext.Provider>
    );
}

export default App;
