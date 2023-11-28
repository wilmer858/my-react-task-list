import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

const Header = ({ addTask }) => {
  const [error, setError] = useState("");
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

    if (newTask.name.trim().length <= 3) {
      setError("The task name must be more than three characters.");
    } else if (newTask.name.trim().length > 70) {
      setError("The task name cannot be that long.");
    } else {
      setError("");
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
    <div className="Header">
      <h2>Todo App</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form1">
          <input
            className="formInputAdd"
            type="text"
            name="name"
            autoComplete="activar"
            placeholder="Name Task"
            value={newTask.name}
            onChange={handleInputChange}
          />
        </label>
        <label className="form2">
          <input
            className="formInputAdd"
            type="text"
            name="description"
            placeholder="Description"
            value={newTask.description}
            onChange={handleInputChange}
          />
        </label>
        <Box
          as="button"
          color="white"
          fontWeight="bold"
          borderRadius="md"
          fontSize="35px"
          bgGradient="radial(circle at 6.6% 12%, rgb(64, 0, 126) 20.8%, rgb(0, 255, 160) 100.2%)"
          _hover={{
            bgGradient: "linear(to-r, #434343 0%, black 100%)",
          }}
          type="submit"
        >
          +
        </Box>
      </form>
      {error && <p className="textError">{error}</p>}
    </div>
  );
};

export default Header;
