import React from 'react'
import TaskList from './TaskList/TaskList'
import Footer from './Footer/Footer'

import './MainTask.css'

const MainTask = function MainTask({
  dataTask,
  deleteTask,
  countTask,
  completeTask,
  clearCompleted,
  dataFilter,
  onFilterDone
}) {
  return (
    <section className="main">
      <TaskList
        dataTask={dataTask}
        deleteTask={(id) => deleteTask(id)}
        completeTask={(id) => completeTask(id)}
        dataFilter={dataFilter}
      />
      <Footer
        countTask={countTask}
        clearCompleted={() => clearCompleted()}
        dataFilter={dataFilter}
        onFilterDone={(id) => onFilterDone(id)}
      />
    </section>
  )
}
export default MainTask
