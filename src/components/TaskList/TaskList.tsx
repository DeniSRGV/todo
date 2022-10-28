import React, { FC } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ITaskItem } from '../../models/ITaskItem';
import Task from '../Task/Task';

import './TaskList.css';

interface TaskListProps {
  dataTask: ITaskItem[];
  completeTask: (id: number, flag: boolean) => void;
  setDataTask: (cb: (dataTask: ITaskItem[]) => ITaskItem[]) => void;
}

const TaskList: FC<TaskListProps> = ({
  dataTask,
  completeTask,
  setDataTask,
}) => {
  const deleteTask = (id: number) => {
    const newTask = (item: ITaskItem) => item.id !== id;
    setDataTask((data) => data.filter(newTask));
  };
  return (
    <section className="main">
      <TransitionGroup component="ul" className="todo-list">
        {dataTask.map((item) => (
          <CSSTransition key={item.id} timeout={500} classNames="item">
            <Task
              completeTask={(flag: boolean) => completeTask(item.id, flag)}
              setDataTask={setDataTask}
              deleteTask={() => deleteTask(item.id)}
              item={item}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </section>
  );
};
export default TaskList;
