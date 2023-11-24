import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return storedTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const completedTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newTitle, newDescription) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, name: newTitle, description: newDescription }
          : task
      )
    );
  };

  return (
    <>
      <div className="Container">
        <Header addTask={addTask} />
        <TaskList
          tasks={tasks}
          onCompletedTask={completedTask}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      </div>
    </>
  );
}

export default App;
