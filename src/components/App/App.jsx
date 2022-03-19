import React, { useState } from 'react'
import Header from '../Header/Header'
import MainTask from '../MainTask/MainTask'
import './App.css'

const App = function App() {
  const [dataTask, setDataTask] = useState([])
  const [dataFilter, setDataFilter] = useState('all')
  const [label, setLabel] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')

  const createTaskItem = (text, minute, second) => ({
    label: text,
    min: minute,
    sec: second,
    id: Math.floor(Math.random() * 1000),
    taskDone: false,
    taskActive: false,
    filterTask: false,
    taskEdit: false,
    time: new Date().getTime()
  })

  const addNewTask = (text, minute, second) => {
    const newTaskItem = createTaskItem(text, minute, second)
    if (text && text.trim() !== '') {
      setDataTask([...dataTask, newTaskItem])
    }
  }

  const labelChange = (event) => {
    setLabel(event.target.value)
  }

  const minuteChange = (event) => {
    setMin(event.target.value)
  }

  const secondChange = (event) => {
    setSec(event.target.value)
  }

  const submitLabel = (event) => {
    event.preventDefault()
    addNewTask(label, min, sec)
    setLabel('')
    setMin('')
    setSec('')
  }
  const deleteTask = (id) => {
    setDataTask(dataTask.filter((item) => item.id !== id))
  }

  const completeTask = (id) => {
    const index = dataTask.findIndex((el) => el.id === id)
    const oldTask = dataTask[index]
    const newTask = { ...oldTask, taskDone: !oldTask.taskDone }

    const newArr = [
      ...dataTask.slice(0, index),
      newTask,
      ...dataTask.slice(index + 1)
    ]
    setDataTask(newArr)
  }

  const filterDone = (value) => {
    setDataFilter(value)
  }

  const clearCompleted = () => {
    const remove = dataTask.filter((el) => !el.taskDone)
    setDataTask(remove)
  }
  const countTask =
    dataTask.length - dataTask.filter((el) => el.taskDone).length

  return (
    <section className="todoapp">
      <Header
        addNewItem={addNewTask}
        label={label}
        min={min}
        sec={sec}
        submitForm={submitLabel}
        labelChange={labelChange}
        minuteChange={minuteChange}
        secondChange={secondChange}
      />
      <MainTask
        dataTask={dataTask}
        deleteTask={deleteTask}
        countTask={countTask}
        completeTask={completeTask}
        clearCompleted={clearCompleted}
        onFilterDone={filterDone}
        dataFilter={dataFilter}
      />
    </section>
  )
}
export default App
