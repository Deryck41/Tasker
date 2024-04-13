import { icons } from 'lucide-react';
import PropTypes from 'prop-types';

export default function Icon({name, onClick}){
    const LucideIcon = icons[name];
    return <LucideIcon onClick={onClick}/>
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func
}