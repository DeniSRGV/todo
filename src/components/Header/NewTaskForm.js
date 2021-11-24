import React from 'react';

import './NewTaskForm.css'

const CreateTodo = ({addNewItem}) => {

	return (
		<input
			className="new-todo"
			placeholder="What needs to be done?"
			autoFocus
			onKeyDown={(e)=>addNewItem(e.code, e.target)}
			/>
	)
};

export default CreateTodo;
