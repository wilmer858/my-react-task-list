import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import useCrudManager from "./components/Hooks/useCrudManager";

function App() {
  const { tasks, addTask, completedTask, deleteTask, editTask } =
    useCrudManager();

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
