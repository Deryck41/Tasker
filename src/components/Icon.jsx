import { icons } from "lucide-react";
import PropTypes from "prop-types";

export default function Icon({ name, color, onClick }) {
  const LucideIcon = icons[name];
  return <LucideIcon color={color} onClick={onClick} />;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
