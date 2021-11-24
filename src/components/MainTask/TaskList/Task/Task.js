import React, {Component} from "react";

import "./Task.css";

class Task extends Component {
  
    render(){
      const {label, deleteTask, taskDone, completeTask, taskEdit, editTask, setEditTask, filterTask} = this.props;
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
                <span className="created">created 5 seconds ago</span>
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