
import React from "react";
import PropTypes from 'prop-types';
import { formatDistanceToNow } from "date-fns";
import "./Task.css";

const Task = function Task({label, deleteTask, taskDone, completeTask, taskEdit, editTask, setEditTask, filterTask, time}) {
 
      
      const createTime = formatDistanceToNow(time, {includeSeconds: true,})
      
      
      function viewClassname() {
      let clazz="";

        if(taskDone) { 
          clazz += "completed"
        }
        
        if(filterTask){
          clazz = "hidden"
        }
        return clazz;
      }
      
        return(
            <li className={viewClassname()}>
            <div className={taskEdit ? "hidden" : "view"}>
              <input className="toggle" type="checkbox" onClick={completeTask}  checked={taskDone} readOnly/>
              <label>
                <span className="description"
                onKeyDown={completeTask}
                onClick={completeTask}
                role="menuitem"
                tabIndex={-40}
                aria-label={label}>
                {label}</span>
                <span className="created">created {createTime} ago</span>
              </label>
              <button
              type="button" 
              className="icon icon-edit"
              onClick={editTask}
              aria-label="Edit Task"/>
              <button
              type="button" 
              className="icon icon-destroy"
              onClick={deleteTask} 
              aria-label="Delete Task"/>
            </div>
            <input type="text"
            className={taskEdit ? "edit" : "hidden"}
            defaultValue={label}
            onKeyDown={(event)=>setEditTask(event.code, event.target.value)}/>
          </li>
        )
    
}
Task.propTypes = {
    label: PropTypes.string,
      taskDone: PropTypes.bool,
      time: PropTypes.number,
      deleteTask: PropTypes.func,
      completeTask: PropTypes.func,
      taskEdit: PropTypes.bool,
      setEditTask: PropTypes.func,
}
export default Task;