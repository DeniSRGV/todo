import React, { FC } from 'react';
import TaskFilter from '../TaskFilter/TaskFilter';

import './Footer.css';
import { ITaskItem } from '../../models/ITaskItem';

interface FooterProps {
  dataTask: ITaskItem[];
  setDataTask: (data: ITaskItem[]) => void;
  handleFilterChange: (val: string) => void;
  filter: string;
}

const Footer: FC<FooterProps> = ({
  dataTask,
  setDataTask,
  handleFilterChange,
  filter,
}) => {
  const clearCompleted = () => {
    const removeCompleted = dataTask.filter((el) => !el.taskDone);
    setDataTask(removeCompleted);
  };
  return (
    <footer className="footer">
      <span className="todo-count">
        {dataTask.length} item{dataTask.length > 1 ? 's' : ''}
      </span>
      <TaskFilter handleFilterChange={handleFilterChange} filter={filter} />
      <button
        type="button"
        className="clear-completed"
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
};
export default Footer;
