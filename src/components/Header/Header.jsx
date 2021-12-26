import React from 'react';
import NewTaskForm from './NewTaskForm';

import './Header.css';

const Header = function Header({ addNewItem }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm addNewItem={addNewItem} />
    </header>
  );
};

export default Header;
