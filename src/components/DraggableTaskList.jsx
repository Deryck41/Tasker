import { TaskContainer, Task } from "./shared/styled";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import PropTypes from "prop-types";

export default function DraggableTaskList({
  tasks,
  OnDragEnd,
  SwitchTask,
  Delete,
  EditTask,
  ChangeIcon,
  ChangeIconColor
}) {
  return (
    <DragDropContext onDragEnd={OnDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <TaskContainer {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, idx) => (
              <Draggable key={task.id} draggableId={task.id} index={idx}>
                {(provided) => (
                  <Task
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
                    onIconColorChange={(newColor) => {
                      ChangeIconColor(idx, newColor);
                    }}
                    dragableProps={provided.draggableProps}
                    dragHandleProps={provided.dragHandleProps}
                    innerRef={provided.innerRef}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </TaskContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
}

DraggableTaskList.propTypes = {
  tasks: PropTypes.array,
  OnDragEnd: PropTypes.func,
  SwitchTask: PropTypes.func,
  Delete: PropTypes.func,
  EditTask: PropTypes.func,
  ChangeIcon: PropTypes.func,
  ChangeIconColor: PropTypes.func
};
