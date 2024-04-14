import PropTypes from "prop-types";
import {
  FlexRow,
  TransparentButton,
  IconsVisor,
  ColorChoiser,
} from "./shared/styled";
import { Trash, Pencil } from "lucide-react";
import { useState } from "react";
import TaskTitle from "./TaskTitle";
import { GetAllIconsNames } from "../utils/icons-manager";
import Icon from "./Icon";

export default function TaskEl({
  text,
  status,
  onClick,
  onDelete,
  onEdit,
  icon,
  onIconChange,
  onIconColorChange,
  innerRef,
  dragableProps,
  dragHandleProps,
  className,
}) {
  const [hover, SetHover] = useState(false);
  const [editMode, SetEditMode] = useState(false);
  const [iconsListVisible, SetIconsListVisible] = useState(false);
  return (
    <FlexRow
      ref={innerRef}
      {...dragableProps}
      {...dragHandleProps}
      justify="space-between"
      className={className}
      onMouseEnter={() => {
        SetHover(true);
      }}
      onMouseLeave={() => {
        SetHover(false);
      }}
    >
      <TaskTitle
        title={text}
        className={`task ${status ? null : "completed"}`}
        onClick={onClick}
        onEdit={onEdit}
        editMode={editMode}
        onBlur={() => {
          SetEditMode(false);
        }}
      />
      <Icon
        onClick={() => {
          SetIconsListVisible(true);
        }}
        name={icon.text}
        color={icon.color}
      />

      {hover ? (
        <FlexRow>
          <TransparentButton
            iconed="true"
            onClick={() => {
              SetEditMode(true);
            }}
            color="#4E5162"
          >
            <Pencil />
          </TransparentButton>
          <TransparentButton iconed="true" color="#4E5162" onClick={onDelete}>
            <Trash />
          </TransparentButton>
        </FlexRow>
      ) : null}

      {iconsListVisible && (
        <div
          onMouseLeave={() => {
            SetIconsListVisible(false);
          }}
        >
          <ColorChoiser
            onChangeComplete={onIconColorChange}
            defaultColor={icon.color}
          />
          <IconsVisor
            onMouseLeave={() => {
              SetIconsListVisible(false);
            }}
          >
            {GetAllIconsNames().map((name, idx) => (
              <Icon
                key={idx}
                name={name}
                onClick={() => {
                  onIconChange(name);
                }}
              />
            ))}
          </IconsVisor>
        </div>
      )}
    </FlexRow>
  );
}

TaskEl.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  status: PropTypes.bool,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  icon: PropTypes.object,
  onIconChange: PropTypes.func,
  onIconColorChange: PropTypes.func,
  innerRef: PropTypes.func,
  dragHandleProps: PropTypes.object,
  dragableProps: PropTypes.object
};
