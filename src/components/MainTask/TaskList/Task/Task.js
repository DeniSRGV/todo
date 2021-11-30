import React, {Component} from "react";
import PropTypes from 'prop-types';
import { formatDistanceToNow } from "date-fns";
import "./Task.css";

class Task extends Component {
    static propTypes = {
      label: PropTypes.string,
      taskDone: PropTypes.bool,
      time: PropTypes.number,
      deleteTask: PropTypes.func,
      completeTask: PropTypes.func,
      taskEdit: PropTypes.bool,
      setEditTask: PropTypes.func,
    }
    render(){
      const {label, deleteTask, taskDone, completeTask, taskEdit, editTask, setEditTask, filterTask, time} = this.props;
      const createTime = formatDistanceToNow(time, {includeSeconds: true,})
      let clazz="";
      let clazzEdit= "hidden";
      let classView = "view"
      
      if(taskDone) { 
        clazz += "completed"
      }
      if(taskEdit){
        clazzEdit = ' edit'
        classView = "hidden";
      }
      if(filterTask){
        clazz = " hidden"
      }
      
      
        return(
            <li className={clazz}>
            <div className={classView}>
              <input className="toggle" type="checkbox"/>
              <label>
                <span className="description"
                onClick={completeTask}>
                {label}</span>
                <span className="created">created {createTime} ago</span>
              </label>
              <button 
              className="icon icon-edit"
              onClick={editTask}></button>
              <button 
              className="icon icon-destroy"
              onClick={deleteTask}></button>
            </div>
            <input type="text"
            className={clazzEdit}
            defaultValue={label}
            onKeyDown={(e)=>setEditTask(e.code, e.target.value)}/>
          </li>
        )
    }
}
export default Task;