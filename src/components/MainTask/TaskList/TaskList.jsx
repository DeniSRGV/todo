import React from 'react'
import Task from './Task/Task'
import './TaskList.css'

const TaskList = function TaskList({
  dataTask,
  deleteTask,
  completeTask,
  dataFilter
}) {
  const elems = dataTask
    .filter((el) => {
      switch (dataFilter) {
        case 'active':
          return !el.taskDone
        case 'completed':
          return el.taskDone
        default:
          return el
      }
    })
    .map((item) => {
      const { min, sec, id, ...data } = item
      return (
        <Task
          {...data}
          key={id}
          deleteTask={() => deleteTask(id)}
          completeTask={() => completeTask(id)}
          min={min}
          sec={sec}
        />
      )
    })

  return <ul className="todo-list">{elems}</ul>
}
export default TaskList
