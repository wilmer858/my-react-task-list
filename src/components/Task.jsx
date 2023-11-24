import { BiTrash, BiEdit, BiSave } from "react-icons/bi";
import React, { useState } from "react";

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

  const handleSaveEdit = () => {
    onEdit(task.id, editedTitle, editedDescription);
    setIsEditing(false);
  };

  return (
    <div className="containerTask">
      {isEditing ? (
        <form className="formInput" onSubmit={handleSaveEdit}>
          <label className="inputEdit" htmlFor="name">
            <input
              className="editInput"
              name="name"
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          </label>
          <label className="inputEdit" htmlFor="name">
            <input
              className="editInput"
              name="name"
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          </label>
          <button className="editSave" type="submit">
            <BiSave />
          </button>
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

          <button className="edit" onClick={handleEdit}>
            <BiEdit />
          </button>
          <button className="delete" onClick={handleDelete}>
            <BiTrash />
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;
