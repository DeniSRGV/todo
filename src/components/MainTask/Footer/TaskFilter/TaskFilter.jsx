import React from 'react'
import './TaskFilter.css'

const TaskFilter = function TaskFilter({ dataFilter, onFilterDone }) {
  const arrFilter = ['all', 'active', 'completed']

  return (
    <ul className="filters">
      {arrFilter.map((item, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={i}>
          <button
            type="button"
            className={dataFilter === item ? 'selected' : ''}
            onClick={() => onFilterDone(item)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  )
}
export default TaskFilter
