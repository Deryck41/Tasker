import PropTypes from "prop-types";
import { FlexRow, TransparentButton } from "./shared/styled";
import { Trash, Pencil } from "lucide-react";
import { useState } from "react";
import TaskTitle from "./TaskTitle";

export default function TaskEl({ text, status, onClick, onDelete, onEdit, className }) {
  const [hover, SetHover] = useState(false);
  const [editMode, SetEditMode] = useState(false);

  return (
    <FlexRow
      justify="space-between"
      className={className}
      onMouseEnter={() => {SetHover(true)}}
      onMouseLeave={() => {SetHover(false)}}
      
    >
      <TaskTitle
      title={text}
      className={`task ${status ? null: 'completed'}`}
      onClick={onClick}
      onEdit={onEdit}
      editMode={editMode}
      onBlur={() => {SetEditMode(false)}}
      />
      {hover ? (
        <FlexRow>
          <TransparentButton iconed="true" onClick={() => {SetEditMode(true)}} color="#4E5162">
            <Pencil />
          </TransparentButton>
          <TransparentButton iconed="true" color="#4E5162" onClick={onDelete}>
            <Trash />
          </TransparentButton>
        </FlexRow>
      ) : null}
    </FlexRow>
  );
}

TaskEl.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  status: PropTypes.bool,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func
};
