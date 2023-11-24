import Task from "./Task";

const TaskList = ({ tasks, onCompletedTask, onDelete, onEdit }) => {
  return (
    <div className="containerTasklist">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onCompletedTask={onCompletedTask}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;
