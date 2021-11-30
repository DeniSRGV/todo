import React from "react";
import PropTypes from 'prop-types';
import './ButtonClear.css'

const ButtonClear = ({clearCompleted}) => {
    return (
        <button 
        className="clear-completed"
        onClick={clearCompleted}>Clear completed</button>
    )
};
ButtonClear.defaultProps = {
	clearCompleted: () => { }
}
ButtonClear.propTypes = {
	clearCompleted: PropTypes.func
};
export default ButtonClear;