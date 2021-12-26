import React from "react";
import './TaskFilter.css'

const TaskFilter = function TaskFilter({dataFilter, onFilterDone}) {
    // const {dataFilter, onFilterDone} = this.props
    const filterBtn = dataFilter.map(item =>{
      const {label, filterDone, id} = item;
      let clazz = '';
      if(filterDone){
        clazz = 'selected'
      }

        return (
          <li key={id}>
              <button 
              type="button"
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
export default TaskFilter;