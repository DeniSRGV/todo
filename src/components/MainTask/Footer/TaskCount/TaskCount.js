import React from "react";
import PropTypes from 'prop-types';
import './TaskCount.css'


const TaskCount = ({countTask})=> {
    return (
        <span className="todo-count">{countTask} items left</span>

    )
}
TaskCount.defaultProps = {
	countTask: false
};

TaskCount.propTypes = {
	countTask: PropTypes.number
};
export default TaskCount;