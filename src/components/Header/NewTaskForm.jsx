import React from 'react';

import './NewTaskForm.css';

const CreateTodo = function CreateTodo({ label, min, sec, submitForm, labelChange, minuteChange, secondChange }) {
  return (
    <form className="new-todo-form" onSubmit={submitForm}>
      <input className="new-todo" type="text" placeholder="Task" autoFocus value={label} onChange={labelChange} />
      <input className="new-todo-form__timer" type="number" placeholder="Min" value={min} onChange={minuteChange} />
      <input className="new-todo-form__timer" type="number" placeholder="Sec" value={sec} onChange={secondChange} />
      <button label="submit" type="submit" />
    </form>
  );
};

export default CreateTodo;
