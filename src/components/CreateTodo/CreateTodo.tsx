import React, { FC, useEffect, useRef, useState } from 'react';
import { ITaskItem } from '../../models/ITaskItem';
import enterImg from '../../assets/enter.svg';
import './CreateTodo.css';

interface CreateTodoProps {
  setDataTask: (cb: (dataTask: ITaskItem[]) => ITaskItem[]) => void;
}
const CreateTodo: FC<CreateTodoProps> = ({ setDataTask }) => {
  const refInput = useRef<HTMLInputElement | null>(null);
  const [label, setLabel] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');
  const createTaskItem = (text: string, minute: string, second: string) =>
    ({
      label: text,
      min: minute,
      sec: second,
      id: Math.floor(Math.random() * 1000),
      taskDone: false,
      time: new Date().getTime(),
    } as ITaskItem);

  const labelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(event.target.value);
  };

  const minuteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMin(event.target.value);
  };

  const secondChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSec(event.target.value);
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (label?.trim() !== '') {
      const newItem = createTaskItem(label, min, sec);
      setDataTask((dataTask) => [...dataTask, newItem]);
      setLabel('');
      setMin('');
      setSec('');
    }
  };
  useEffect(() => {
    refInput.current?.focus();
  }, []);
  return (
    <header className="header">
      <h1>todos</h1>
      <form className="new-todo-form" onSubmit={submitForm}>
        <input
          ref={refInput}
          className="new-todo"
          required
          type="text"
          placeholder="Task"
          value={label}
          onChange={labelChange}
        />
        <input
          className="new-todo-form__timer"
          type="number"
          placeholder="Min"
          value={min}
          onChange={minuteChange}
        />
        <input
          className="new-todo-form__timer"
          type="number"
          placeholder="Sec"
          value={sec}
          onChange={secondChange}
        />
        <button aria-label="submit-btn" className="submit-btn" type="submit">
          <img src={enterImg} alt="enter" />
        </button>
      </form>
    </header>
  );
};

export default React.memo(CreateTodo);
