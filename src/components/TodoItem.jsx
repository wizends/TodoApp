import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleteAsync, deleteTodoAsync } from '../redux/todoSlice';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
	checkBox:{
		marginRight:"5px"
	},
	card:{
		marginBottom:"15px",
		border:"solid 1px rgba(0,0,0,.125)",
		borderRadius:"10px"

	}
}

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(toggleCompleteAsync({ id, completed: !completed }));
	};

	const handleDeleteClick = () => {
		dispatch(deleteTodoAsync({ id }));
	};

	return (
		<li style={styles.card} className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input style={styles.checkBox} type='checkbox' className='mr-3' checked={completed} onClick={handleCheckboxClick}></input>
					{title}
				</span>
				<button onClick={handleDeleteClick} className='btn btn-danger'>
					<FontAwesomeIcon icon={faXmark}/>
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
