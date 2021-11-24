import React from "react";
import './ButtonClear.css'

const ButtonClear = ({clearCompleted}) => {
    return (
        <button 
        className="clear-completed"
        onClick={clearCompleted}>Clear completed</button>
    )
};
export default ButtonClear;