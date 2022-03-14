import React from 'react';
import './TaskFilter.css';

const TaskFilter = function TaskFilter({ dataFilter, onFilterDone }) {
  // const {dataFilter, onFilterDone} = this.props
  const filterBtn = dataFilter.map((item) => {
    const { value, filterDone, id } = item;

    const clazz = filterDone ? 'selected' : '';

    return (
      <li key={id}>
        <button type="button" className={clazz} onClick={() => onFilterDone(id)}>
          {value}
        </button>
      </li>
    );
  });
  return <ul className="filters">{filterBtn}</ul>;
};
export default TaskFilter;
