import { BiTrash, BiEdit } from "react-icons/bi";

export const Task = ({ task }) => {
  return (
    <div className="task">
      <input className="checkbox " type="checkbox" />

      <span className="span1">{task.name}</span>
      <span className="span2">{task.description}</span>

      <button className="edit">
        <BiEdit />
      </button>
      <button className="delete">
        <BiTrash />
      </button>
    </div>
  );
};
