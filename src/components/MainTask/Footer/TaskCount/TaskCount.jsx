import React from 'react'
import './TaskCount.css'

const TaskCount = function TaskCount({ countTask }) {
  return <span className="todo-count">{countTask} items left</span>
}
export default TaskCount
