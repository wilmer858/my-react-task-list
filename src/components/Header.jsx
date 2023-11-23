import React, { useState } from "react";

const Header = ({ addTask }) => {
  const [newTask, setNewTask] = useState({
    id: Date.now(),
    name: "",
    description: "",
    completed: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.name.trim() !== "") {
      addTask(newTask);
      setNewTask({
        id: Date.now(),
        name: "",
        description: "",
        completed: false,
      });
    }
  };

  return (
    <div>
      <h2>Todo App</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form1">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newTask.name}
            onChange={handleInputChange}
          />
        </label>
        <label className="form2">
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newTask.description}
            onChange={handleInputChange}
          />
        </label>
        <button className="button" type="submit">
          +
        </button>
      </form>
    </div>
  );
};

export default Header;
