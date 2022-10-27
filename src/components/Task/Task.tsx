/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, useRef, useState, useMemo, useEffect } from 'react';
import Countdown, { zeroPad } from 'react-countdown';
import ruLocale from 'date-fns/locale/ru';
import { formatDistanceToNow } from 'date-fns';
import play from '../../assets/play.svg';
import { ITaskItem } from '../../models/ITaskItem';
import pause from '../../assets/pause.svg';
import doneAudio from '../../assets/done.mp3';
import './Task.css';
import { useBeforeUnload } from '../../hooks/useBeforeUnload';
import { useAudio } from '../../hooks/useAudio';

interface TaskProps {
  item: ITaskItem;
  deleteTask: () => void;
  completeTask: (flag: boolean) => void;
  setDataTask: (cb: (dataTask: ITaskItem[]) => ITaskItem[]) => void;
}
const Task: FC<TaskProps> = ({
  item,
  completeTask,
  deleteTask,
  setDataTask,
}) => {
  const { taskDone, min, sec, label, time } = item;
  const [taskEdit, setTaskEdit] = useState(false);
  const [isToggle, setIsToggle] = useState(true);
  const dateTime = useMemo(() => Date.now() + (+min * 60 + +sec) * 1000, []);
  const [labelEdit, setLabelEdit] = useState(item.label || '');
  const timeRef = useRef<any>(null);
  const editRef = useRef<HTMLInputElement>(null);

  const [, toggle] = useAudio(doneAudio);

  const saveTimeLocal = () => {
    const t = timeRef?.current.state.timeDelta;
    setDataTask((data) =>
      data.map((el) => {
        if (el.id === item.id) {
          el.min = String(t.minutes);
          el.sec = String(t.seconds);
        }

        return el;
      })
    );
  };
  useBeforeUnload(saveTimeLocal);
  const setEditTask = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (taskEdit && event.key === 'Enter') {
      const target = (event.target as HTMLInputElement).value;
      if (target.trim() !== '') {
        event.preventDefault();
        setLabelEdit(target);
        const newTask = (elem: ITaskItem) => {
          if (elem.id === item.id) {
            elem.label = target;
          }
          return elem;
        };
        setDataTask((data) => data.map(newTask));
        setTaskEdit(false);
      }
    }
  };
  useEffect(() => {
    if (!isToggle) {
      timeRef.current?.start();
    } else {
      timeRef.current?.pause();
    }
  }, [isToggle]);
  useEffect(() => {
    if (taskEdit) {
      editRef.current?.focus();
    }
  }, [taskEdit]);
  const timerEnd = () => {
    completeTask(true);
    setIsToggle((s) => !s);
    if (typeof toggle === 'function') toggle();
  };
  const handleButton = () => {
    setIsToggle((t) => !t);
  };

  const createTime = formatDistanceToNow(time, {
    includeSeconds: true,
    addSuffix: true,
    locale: ruLocale,
  });

  const renderer = ({
    hours,
    minutes,
    seconds,
  }: {
    hours: number | string;
    minutes: number | string;
    seconds: number | string;
  }) => (
    <>
      {+min > 60 && `${zeroPad(hours)}:`}
      {zeroPad(minutes)}:{zeroPad(seconds)}
    </>
  );

  return (
    <li className={taskDone ? 'completed' : ''}>
      <div className={taskEdit ? 'hidden' : 'view'}>
        <input
          className="toggle"
          type="checkbox"
          onClick={() => completeTask(false)}
          checked={taskDone}
          readOnly
        />
        <label>
          <span
            className="description"
            // onKeyDown={() => completeTask(false)}
            onClick={() => completeTask(false)}
            role="presentation"
            aria-label={label}
          >
            {labelEdit}
          </span>
        </label>

        <span className="timer-info">
          {isToggle ? (
            <button
              type="button"
              className="icon-timer"
              aria-label="play-btn"
              onClick={handleButton}
            >
              {' '}
              <img src={play} alt="play button" />
            </button>
          ) : (
            <button
              type="button"
              className="icon-timer"
              aria-label="play-btn"
              onClick={handleButton}
            >
              {' '}
              <img src={pause} alt="pause button" />
            </button>
          )}

          <span className="timer">
            <Countdown
              ref={timeRef}
              date={dateTime}
              renderer={renderer}
              autoStart={false}
              onComplete={timerEnd}
            />
          </span>
        </span>

        <span className="created">{createTime}</span>

        <button
          type="button"
          className="icon icon-edit"
          onClick={() => setTaskEdit(true)}
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
        ref={editRef}
        type="text"
        className={taskEdit ? 'edit' : 'hidden'}
        defaultValue={label}
        onKeyDown={setEditTask}
      />
    </li>
  );
};
export default Task;
