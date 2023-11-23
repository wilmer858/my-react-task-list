import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import { TaskList } from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  return (
    <>
      <div className="Container">
        <Header addTask={addTask} />
        <TaskList tasks={tasks} />
      </div>
    </>
  );
}

export default App;
