import React, {Component} from "react";
import Task from './Task/Task'
import './TaskList.css'

class TaskList extends Component {
    render(){
      const {dataTask, deleteTask, completeTask, editTask,setEditTask } = this.props
      const elems = dataTask.map(item => {
        const {id, ...dataTask} = item;
        return (
          <Task
          {...dataTask}
          key={id}
          deleteTask={()=>deleteTask(id)}
          editTask={()=>editTask(id)}
          completeTask={()=>completeTask(id)}
          setEditTask={(...e)=>setEditTask(...e, id)}/>
        )
      })
      
      return (
        <ul className="todo-list">
         {elems}
        </ul>
       
    )
    }
}
export default TaskList;