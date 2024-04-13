import { useState } from "react";
import { ChromePicker } from "react-color";
import PropTypes from "prop-types";

export default function ColorPicker({
  defaultColor,
  onChangeComplete,
  onMouseLeave,
  className,
}) {
  const [color, SetColor] = useState(defaultColor);
  return (
    <ChromePicker
      className={className}
      color={color}
      onBlur={onMouseLeave}
      onChange={(color) => {
        SetColor(color);
      }}
      onChangeComplete={(color) => {
        onChangeComplete(color.hex);
      }}
    />
  );
}

ColorPicker.propTypes = {
  defaultColor: PropTypes.string,
  onChangeComplete: PropTypes.func,
  onMouseLeave: PropTypes.func,
  className: PropTypes.string,
};
