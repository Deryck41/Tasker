import { Container, Button } from "./components/shared/styled";
import { Plus } from "lucide-react";
import TopBar from "./components/TopBar";
import DraggableTaskList from "./components/DraggableTaskList";
import { useTasks } from "./hooks/useTasks";

function App() {
  const {
    tasks,
    SwitchTask,
    AddTask,
    Delete,
    EditTask,
    ChangeIcon,
    ChangeIconColor,
    OnDragEnd,
  } = useTasks();

  return (
    <Container>
      <Container style={{ backgroundColor: "#FFF" }}>
        <TopBar />
        <DraggableTaskList
          tasks={tasks}
          OnDragEnd={OnDragEnd}
          SwitchTask={SwitchTask}
          Delete={Delete}
          EditTask={EditTask}
          ChangeIcon={ChangeIcon}
          ChangeIconColor={ChangeIconColor}
        />
      </Container>
      <Button
        onClick={AddTask}
        iconed="true"
        shape="circle"
        bg="#50E3A4"
        style={{ marginTop: "-1.5em", alignSelf: "center" }}
      >
        <Plus />
      </Button>
    </Container>
  );
}

export default App;
