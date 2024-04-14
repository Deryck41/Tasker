import { useState, useEffect } from "react";
import { SaveToStorage, GetFromStorage } from "../utils/local-storager";
import { v4 as uuidv4 } from "uuid";

export const useTasks = () => {
  const [tasks, SetTasks] = useState(GetFromStorage("tasks") || []);

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
    copyArr.push({
      id: uuidv4(),
      text: `new ${tasks.length + 1}`,
      status: true,
      icon: { text: "NotepadText", color: "#50E3A4" },
    });
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
    copyArr[index]["icon"].text = icon;
    SetTasks(copyArr);
  };

  const ChangeIconColor = (index, color) => {
    const copyArr = [...tasks];
    copyArr[index]["icon"].color = color;
    SetTasks(copyArr);
  };

  const OnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const copyArr = [...tasks];
    const [reorderItems] = copyArr.splice(result.source.index, 1);
    copyArr.splice(result.destination.index, 0, reorderItems);
    SetTasks(copyArr);
  };

  return {
    tasks,
    SwitchTask,
    AddTask,
    Delete,
    EditTask,
    ChangeIcon,
    ChangeIconColor,
    OnDragEnd,
  };
};
