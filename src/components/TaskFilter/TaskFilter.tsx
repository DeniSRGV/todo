import React, { FC } from 'react';
import { TaskFilters } from '../../models/enums/Filters';
import './TaskFilter.css';

interface TaskFilterProps {
  handleFilterChange: (val: string) => void;
  filter: string;
}
const TaskFilter: FC<TaskFilterProps> = ({ handleFilterChange, filter }) => (
  <ul className="filters">
    {Object.values(TaskFilters).map((item) => (
      <li key={item}>
        <button
          type="button"
          className={filter === item ? 'selected' : ''}
          onClick={() => handleFilterChange(item)}
        >
          {item}
        </button>
      </li>
    ))}
  </ul>
);
export default TaskFilter;
