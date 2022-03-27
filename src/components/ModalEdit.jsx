import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import "../styles/Modal.css";
import { editTodoAsync } from '../redux/todoSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark , faPlus } from '@fortawesome/free-solid-svg-icons';
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';


const ModalEdit = ({ setOpenModal, todo, title,dateToComplete }) => {

	const handleClick = () =>{
		setOpenModal(false);
	};
	

	const [value, setValue] = useState(title);
	const [dateV , setDataV] = useState(dateToComplete)
	const dispatch = useDispatch();

	

	const onSubmit = (event) => {
		setOpenModal(false);
		const dateto = document.getElementById("todoDate").value
		let dateNow = new Date();
		let date = dateNow.getDate();
		let month = dateNow.getMonth() + 1;
		let year = dateNow.getFullYear();
		const separator = "-";
		const dateSending = `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`;
		event.preventDefault();
		if (value) {
			dispatch(
				editTodoAsync({
					id: todo,
					title: value,
					date: dateSending,
					dateTo: dateto
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
				<h4>Editar Todo</h4>
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
					<input id='todoDate' value={dateV} onChange={(event) => setDataV(event.target.dateV)} type="date"></input>
                </div>
                <button type='submit' className='btn btn-primary mb-2'>
					Actualizar
					</button>
					
				</form>
				
			</div>
		</div>
	);
};

export default ModalEdit;
