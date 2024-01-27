import logo from './logo.svg';
import './App.css';
import NewTask from "./pages/NewTask";
import Task from "./pages/Task";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <div className="App">
      <NewTask/>
        <TodoList/>
    </div>
  );
}

export default App;
