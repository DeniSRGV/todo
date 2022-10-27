import React, { FC } from 'react';
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
      <ul className="todo-list">
        {dataTask.map((item) => (
          <Task
            key={item.id}
            completeTask={(flag: boolean) => completeTask(item.id, flag)}
            setDataTask={setDataTask}
            deleteTask={() => deleteTask(item.id)}
            item={item}
          />
        ))}
      </ul>
    </section>
  );
};
export default TaskList;
