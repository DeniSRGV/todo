import React from 'react';

import './NewTaskForm.css'

const CreateTodo = function({addNewItem}) {
	return (
		<input
			className="new-todo"
			placeholder="What needs to be done?"
			autoFocus
			onKeyDown={(event)=>addNewItem(event.code, event.target)}
			/>
	)
			
		
		
	
}

export default CreateTodo;
