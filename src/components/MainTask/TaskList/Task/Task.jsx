import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Countdown, { zeroPad } from 'react-countdown';
import { formatDistanceToNow } from 'date-fns';
import './Task.css';

class Task extends Component {
  constructor(props) {
    super(props);
    this.timeRef = React.createRef();
  }

  startTimer = () => {
    this.timeRef.current.start();
  };

  pauseTimer = () => {
    this.timeRef.current.pause();
  };

  render() {
    const { label, deleteTask, taskDone, completeTask, taskEdit, editTask, setEditTask, filterTask, time, min, sec } =
      this.props;
    const createTime = formatDistanceToNow(time, { includeSeconds: true });
    const renderer = ({ minutes, seconds }) => (
      <>
        {zeroPad(minutes)}:{zeroPad(seconds)}
      </>
    );
    let clazz;
    if (taskDone) {
      clazz = 'completed';
    }
    if (filterTask) {
      clazz = 'hidden';
    }

    return (
      <li className={clazz}>
        <div className={taskEdit ? 'hidden' : 'view'}>
          <input className="toggle" type="checkbox" onClick={completeTask} checked={taskDone} readOnly />
          <label>
            <span
              className="description"
              onKeyDown={completeTask}
              onClick={completeTask}
              role="presentation"
              aria-label={label}
            >
              {label}
            </span>
            <span>
              <button type="button" className="icon icon-play" aria-label="play-btn" onClick={this.startTimer} />
              <button type="button" className="icon icon-pause" aria-label="pause-btn" onClick={this.pauseTimer} />
              <span className="timer">
                <Countdown
                  ref={this.timeRef}
                  date={Date.now() + (+min * 60 + +sec) * 1000}
                  renderer={renderer}
                  onComplete={completeTask}
                />
              </span>
            </span>

            <span className="created">created {createTime} ago</span>
          </label>
          <button type="button" className="icon icon-edit" onClick={editTask} aria-label="Edit Task" />
          <button type="button" className="icon icon-destroy" onClick={deleteTask} aria-label="Delete Task" />
        </div>
        <input
          type="text"
          className={taskEdit ? 'edit' : 'hidden'}
          defaultValue={label}
          onKeyDown={(event) => setEditTask(event.code, event.target.value)}
        />
      </li>
    );
  }
}
Task.propTypes = {
  label: PropTypes.string,
  taskDone: PropTypes.bool,
  time: PropTypes.number,
  deleteTask: PropTypes.func,
  completeTask: PropTypes.func,
  taskEdit: PropTypes.bool,
  setEditTask: PropTypes.func,
};
export default Task;
