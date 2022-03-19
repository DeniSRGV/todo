import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Countdown, { zeroPad } from 'react-countdown'
import { formatDistanceToNow } from 'date-fns'
import './Task.css'

const Task = function Task({
  label,
  deleteTask,
  taskDone,
  completeTask,
  filterTask,
  time,
  min,
  sec
}) {
  const [taskEdit, setTaskEdit] = useState(false)
  const [labelEdit, setLabelEdit] = useState(label)

  const editTask = () => {
    setTaskEdit(true)
  }
  const setEditTask = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault()
      setLabelEdit(event.target.value)
      setTaskEdit(false)
    }
  }
  const timeRef = React.createRef()

  const startTimer = () => {
    timeRef.current.start()
  }

  const pauseTimer = () => {
    timeRef.current.pause()
  }

  const createTime = formatDistanceToNow(time, { includeSeconds: true })
  const renderer = ({ minutes, seconds }) => (
    <>
      {zeroPad(minutes)}:{zeroPad(seconds)}
    </>
  )
  let clazz

  if (taskDone) {
    clazz = 'completed'
  }
  if (filterTask) {
    clazz = 'hidden'
  }

  return (
    <li className={clazz}>
      <div className={taskEdit ? 'hidden' : 'view'}>
        <input
          className="toggle"
          type="checkbox"
          onClick={completeTask}
          checked={taskDone}
          readOnly
        />
        <label>
          <span
            className="description"
            onKeyDown={completeTask}
            onClick={completeTask}
            role="presentation"
            aria-label={label}
          >
            {labelEdit}
          </span>
          <span>
            <button
              type="button"
              className="icon icon-play"
              aria-label="play-btn"
              onClick={startTimer}
            />
            <button
              type="button"
              className="icon icon-pause"
              aria-label="pause-btn"
              onClick={pauseTimer}
            />
            <span className="timer">
              <Countdown
                ref={timeRef}
                date={Date.now() + (+min * 60 + +sec) * 1000}
                renderer={renderer}
                onComplete={completeTask}
              />
            </span>
          </span>

          <span className="created">created {createTime} ago</span>
        </label>
        <button
          type="button"
          className="icon icon-edit"
          onClick={editTask}
          aria-label="Edit Task"
        />
        <button
          type="button"
          className="icon icon-destroy"
          onClick={deleteTask}
          aria-label="Delete Task"
        />
      </div>
      <input
        type="text"
        className={taskEdit ? 'edit' : 'hidden'}
        defaultValue={label}
        ref={(input) => input && input.focus()}
        onKeyDown={setEditTask}
        // onBlur={editTask}
      />
    </li>
  )
}
Task.propTypes = {
  label: PropTypes.string,
  taskDone: PropTypes.bool,
  time: PropTypes.number,
  deleteTask: PropTypes.func,
  completeTask: PropTypes.func
}
export default Task
