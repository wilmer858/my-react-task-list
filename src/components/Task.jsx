import { BiTrash, BiEdit, BiSave } from "react-icons/bi";
import React, { useState } from "react";
import { IconButton } from "@chakra-ui/react";

const Task = ({ task, onCompletedTask, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleCompletedTask = () => {
    onCompletedTask(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    onEdit(task.id, editedTitle, editedDescription);
    setIsEditing(false);
  };

  return (
    <div className="containerTask">
      {isEditing ? (
        <form className="formInput" onSubmit={handleSaveEdit}>
          <label className="inputEdit">
            <input
              className="editInput"
              name="name"
              autoComplete="active"
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          </label>
          <label className="inputEdit">
            <input
              className="editInput"
              name="name"
              autoComplete="active"
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          </label>
          <IconButton
            fontSize={25}
            color={"-moz-initial"}
            bg={"none"}
            className="editSave"
            type="submit"
          >
            <BiSave />
          </IconButton>
        </form>
      ) : (
        <div className={`task ${task.completed ? "completed" : ""}`}>
          <input
            className="checkboxBotton"
            name="name"
            autoComplete="activar"
            type="checkbox"
            checked={task.completed}
            onChange={handleCompletedTask}
          />
          <span className="span1">{task.name}</span>
          <span className="span2">{task.description}</span>

          <IconButton
            fontSize={25}
            color={"-moz-initial"}
            bg={"none"}
            className="edit"
            onClick={handleEdit}
          >
            <BiEdit />
          </IconButton>
          <IconButton
            fontSize={25}
            color={"-moz-initial"}
            bg={"none"}
            className="delete"
            onClick={handleDelete}
          >
            <BiTrash />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default Task;
