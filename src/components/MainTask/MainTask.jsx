import React, { Component } from 'react';
import TaskList from './TaskList/TaskList';
import Footer from './Footer/Footer';

import './MainTask.css';

class MainTask extends Component {
  render() {
    const {
      dataTask,
      deleteTask,
      countTask,
      completeTask,
      editTask,
      setEditTask,
      clearCompleted,
      dataFilter,
      onFilterDone,
    } = this.props;

    const arrId = dataTask.reduce((acc, next) => {
      if (next.taskDone) acc.push(next.id);
      return acc;
    }, []);

    return (
      <section className="main">
        <TaskList
          dataTask={dataTask}
          deleteTask={(id) => deleteTask(id)}
          editTask={(id) => editTask(id)}
          completeTask={(id) => completeTask(id)}
          setEditTask={setEditTask}
        />
        <Footer
          countTask={countTask}
          clearCompleted={() => clearCompleted(arrId)}
          dataFilter={dataFilter}
          onFilterDone={(id) => onFilterDone(id)}
        />
      </section>
    );
  }
}
export default MainTask;
