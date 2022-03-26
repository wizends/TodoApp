import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../redux/todoSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark , faPlus } from '@fortawesome/free-solid-svg-icons';
const styles = {
	form:{
		display:"none"
	},
	span:{
		marginTop:"20px",
		marginBottom:"20px",
		marginLeft:"0px",
		marginRgith:"0px"
	},
	icono:{
		width:"1.8em",
		height:"1.8em"
	},
	close:{
		display:"inline",
		float:"right"
	}
}

const AddTodoForm = () => {
	
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		let dateNow = new Date();
		let date = dateNow.getDate();
		let month = dateNow.getMonth() + 1;
		let year = dateNow.getFullYear();
		const separator = "-";
		const dateSending = `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`;
		event.preventDefault();
		if (value) {
			dispatch(
				addTodoAsync({
					title: value,
					date: dateSending
				})
			);
		}
	};
const showForm = () =>{
	const visible = document.getElementById("formDyn");
	visible.className = "vis card";
}
const closeForm = () =>{
	const invisible = document.getElementById("formDyn");
	invisible.className = "inv";
}

	return (
		<li style={styles.span} className={'list-group-item'}>
			<div className='d-flex justify-content-center'>
				<span style={styles.span} className='align-items-center'>
				<FontAwesomeIcon style={styles.icono} icon={faPlus} onClick={showForm}/>
				</span>
			</div>
			<div className="inv" id='formDyn' >
				<div className='align-items-right' onClick={closeForm}>
					<FontAwesomeIcon icon={faXmark} style={styles.close}/>
				</div>
				<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
					<label className='sr-only'>Name</label>
					<input
						type='text'
						className='form-control mb-2 mr-sm-2'
						placeholder='Agregar tarea...'
						value={value}
						onChange={(event) => setValue(event.target.value)}
					></input>

					<button type='submit' className='btn btn-primary mb-2'>
					Agregar
					</button>
				</form>
			</div>
		</li>
		
	);
};

export default AddTodoForm;
