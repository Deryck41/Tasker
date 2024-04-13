import PropTypes from "prop-types";

export default function TaskTitle({
  title,
  onClick,
  className,
  onEdit,
  onBlur,
  editMode,
}) {
  const ChangeText = (event) => {
    onEdit(event.target.value);
  };
  return (
    <>
      {editMode ? (
        <input
          className={className}
          onChange={ChangeText}
          defaultValue={title}
          onBlur={onBlur}
          autoFocus
        />
      ) : (
        <div onClick={onClick} className={className}>
          {title}
        </div>
      )}
    </>
  );
}

TaskTitle.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  onEdit: PropTypes.func,
  onBlur: PropTypes.func,
  editMode: PropTypes.bool,
};
