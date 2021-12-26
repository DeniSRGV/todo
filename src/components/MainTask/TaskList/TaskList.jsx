import React from 'react';
import Task from './Task/Task';
import './TaskList.css';

const TaskList = function TaskList({ dataTask, deleteTask, completeTask, editTask, setEditTask }) {
  const elems = dataTask.map((item) => {
    const { id, ...data } = item;
    return (
      <Task
        {...data}
        key={id}
        deleteTask={() => deleteTask(id)}
        editTask={() => editTask(id)}
        completeTask={() => completeTask(id)}
        setEditTask={(...event) => setEditTask(...event, id)}
      />
    );
  });

  return <ul className="todo-list">{elems}</ul>;
};
export default TaskList;
