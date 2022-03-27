import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../redux/todoSlice';


const TodoList = () => {
	const dispatch = useDispatch();
	const todos = (useSelector((state) => state.todos));

	useEffect(() => {
		dispatch(getTodosAsync());
	}, [dispatch]);
	console.log(todos);

	return (
		<ul className='list-group'>
		
		{todos.map((todo) => (
				<TodoItem id={todo.id} key={todo.id} title={todo.title} completed={todo.completed} date={todo.date} dateToComplete={todo.dateToComplete} />
			))}
		</ul>
	);
};

export default TodoList;
