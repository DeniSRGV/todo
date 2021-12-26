import React from 'react';
import TaskCount from './TaskCount/TaskCount';

import './Footer.css';
import TaskFilter from './TaskFilter/TaskFilter';
import ButtonClear from './ButtonClear/ButtonClear';

const Footer = function Footer({ countTask, clearCompleted, onFilterDone, dataFilter }) {
  return (
    <footer className="footer">
      <TaskCount countTask={countTask} />
      <TaskFilter dataFilter={dataFilter} onFilterDone={(id) => onFilterDone(id)} />
      <ButtonClear clearCompleted={clearCompleted} />
    </footer>
  );
};
export default Footer;
