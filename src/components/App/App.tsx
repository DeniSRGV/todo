import React, { FC, useState } from 'react';
import { ITaskItem } from '../../models/ITaskItem';
import Footer from '../Footer/Footer';
import NewTaskForm from '../CreateTodo/CreateTodo';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import TaskList from '../TaskList/TaskList';
import { TaskFilters } from '../../models/enums/Filters';
import './App.css';

const App: FC = () => {
  const [dataTask, setDataTask] = useLocalStorage<ITaskItem[]>('dataTask', []);
  const [filter, setFilter] = useState<string>(TaskFilters.All);
  const handleFilterChange = (value: string): void => {
    setFilter(value);
  };
  const completeTask = (id: number, flag?: boolean) => {
    const filterTask = (item: ITaskItem) => {
      if (item.id === id) {
        item.taskDone = flag ? true : !item.taskDone;
      }
      return item;
    };
    setDataTask((data) => data.map(filterTask));
  };

  const displayTasks = dataTask.filter((el) => {
    switch (filter) {
      case TaskFilters.All:
        return true;
      case TaskFilters.Completed:
        return el.taskDone;
      case TaskFilters.Active:
        return !el.taskDone;
      default:
        return false;
    }
  });

  return (
    <section className="todoapp">
      <NewTaskForm setDataTask={setDataTask} />
      <TaskList
        dataTask={displayTasks}
        completeTask={completeTask}
        setDataTask={setDataTask}
      />
      <Footer
        dataTask={displayTasks}
        setDataTask={setDataTask}
        handleFilterChange={handleFilterChange}
        filter={filter}
      />
    </section>
  );
};
export default App;
