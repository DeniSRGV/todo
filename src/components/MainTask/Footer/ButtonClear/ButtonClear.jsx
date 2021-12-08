import React from "react";
import './ButtonClear.css'

const ButtonClear = function({clearCompleted})  {
        return (
            <button
            type="button" 
            className="clear-completed"
            onClick={clearCompleted}>Clear completed</button>
      
        )
    
}
export default ButtonClear;