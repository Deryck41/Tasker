import { SaveToStorage, GetFromStorage } from "./utils/local-storager";
import { useEffect, useState } from "react";
import {
  Container,
  Button,
  DisplayMonth,
  DisplayDay,
  DisplayYear,
  FlexRow,
  FlexCol,
  DisplayWeekDay,
  TaskContainer,
  Task,
} from "./components/shared/styled";
import { Plus } from "lucide-react";
function App() {
  const [date, SetDate] = useState(new Date());
  const [tasks, SetTasks] = useState(GetFromStorage("tasks") || []);

  const Update = () => {
    SetDate(new Date());
    setTimeout(Update, 50000);
  };

  useEffect(() => {
    setTimeout(Update, 5000);
  }, []);

  useEffect(() => {
    SaveToStorage("tasks", tasks);
  }, [tasks]);

  const SwitchTask = (index) => {
    const copyArr = [...tasks];
    copyArr[index]["status"] = !copyArr[index]["status"];
    SetTasks(copyArr);
  };

  const AddTask = () => {
    const copyArr = [...tasks];
    copyArr.push({ text: `new ${tasks.length + 1}`, status: true, icon: 'NotepadText' });
    SetTasks(copyArr);
  };

  const Delete = (index) => {
    const copyArr = [...tasks];
    copyArr.splice(index, 1);
    SetTasks(copyArr);
  };

  const EditTask = (index, value) => {
    const copyArr = [...tasks];
    copyArr[index]["text"] = value;
    SetTasks(copyArr);
  };

  const ChangeIcon = (index, icon) => {
    const copyArr = [...tasks];
    copyArr[index]['icon'] = icon;
    SetTasks(copyArr);
  }

  return (
    <Container>
      <Container style={{ backgroundColor: "#FFF" }}>
        <FlexRow justify="space-between" style={{ padding: "30px" }}>
          <FlexRow>
            <DisplayDay>{date.getDate()}</DisplayDay>
            <FlexCol>
              <DisplayMonth>
                {new Intl.DateTimeFormat("en-US", { month: "short" }).format(
                  date
                )}
              </DisplayMonth>
              <DisplayYear>{date.getFullYear()}</DisplayYear>
            </FlexCol>
          </FlexRow>
          <DisplayWeekDay>
            {new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date)}
          </DisplayWeekDay>
        </FlexRow>
        <TaskContainer>
          {tasks.map((task, idx) => (
            <Task
              key={idx}
              text={task.text}
              status={task.status}
              onClick={() => {
                SwitchTask(idx);
              }}
              onDelete={() => {
                Delete(idx);
              }}
              onEdit={(value) => {
                EditTask(idx, value);
              }}
              icon={task.icon}
              onIconChange={(newIcon) => {
                ChangeIcon(idx, newIcon);
              }}
            />
          ))}
        </TaskContainer>
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
