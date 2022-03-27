import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import "../styles/Modal.css";
import { addTodoAsync } from '../redux/todoSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark , faPlus } from '@fortawesome/free-solid-svg-icons';


const ModalAdd = ({setOpenModal}) => {

	const [value, setValue] = useState('');
	const dispatch = useDispatch();

    const handleClick = () =>{
		setOpenModal(false);
	};

	const onSubmit = (event) => {
		const dateToComplete = document.getElementById("dateComplete").value
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
					date: dateSending,
					dateTo: dateToComplete
				})
			);
		}
	};



	return (
		
		<div className="modalBackground">
			<div className="modalContainer">
				<div className="titleCloseBtn">
					<button onClick={handleClick}><FontAwesomeIcon icon={faXmark}/></button>
				</div>
                <h4>Agregar Todo</h4>
				<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
                <div className='form-group'>
                <label className='sr-only'>Name</label>
					<input
						type='text'
						className='form-control mb-2 mr-sm-2'
						placeholder='Agregar tarea...'
						value={value}
						onChange={(event) => setValue(event.target.value)}
					></input>
                    <label>Fecha a completar: </label>
					<input className='' id='dateComplete' type="date"></input>
                </div>
                <button type='submit' className='btn btn-primary mb-2'>
					Agregar
					</button>
					
				</form>
			</div>
		</div>
	);
};

export default ModalAdd;
