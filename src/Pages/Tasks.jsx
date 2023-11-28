import { Box, Flex } from "@chakra-ui/react";
import useCrudManager from "../Hooks/useCrudManager";
import Header from "../components/Header";
import TaskList from "../components/TaskList";

const Tasks = () => {
  const { tasks, addTask, completedTask, deleteTask, editTask } =
    useCrudManager();

  return (
    <Flex pt={150} alignItems="center" justifyContent={"center"}>
      <Box p={25} bg={"Background"} className="Container">
        <Header addTask={addTask} />
        <TaskList
          tasks={tasks}
          onCompletedTask={completedTask}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      </Box>
    </Flex>
  );
};

export default Tasks;
