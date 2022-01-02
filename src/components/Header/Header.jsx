import React from 'react';
import NewTaskForm from './NewTaskForm';

import './Header.css';

const Header = function Header({ addNewItem, label, min, sec, submitForm, labelChange, secondChange, minuteChange }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm
        addNewItem={addNewItem}
        label={label}
        min={min}
        sec={sec}
        submitForm={submitForm}
        labelChange={labelChange}
        secondChange={secondChange}
        minuteChange={minuteChange}
      />
    </header>
  );
};

export default Header;
