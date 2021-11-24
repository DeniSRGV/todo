import React, {Component} from "react";
import './TaskFilter.css'

class TaskFilter extends Component {
  render(){
    const {dataFilter, onFilterDone} = this.props
    let filterBtn = dataFilter.map(item =>{
      const {label, filterDone, id} = item;
      let clazz = '';
      if(filterDone)
          clazz = 'selected'

        return (
          <li key={id}>
              <button 
              className={clazz}
              onClick={() => onFilterDone(id)}>{label}</button>
            </li>
            
        )
    })
    return(
        <ul className="filters">
            {filterBtn}
          </ul>
    )
  }
   
}
export default TaskFilter;