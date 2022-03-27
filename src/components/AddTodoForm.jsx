import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../redux/todoSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark , faPlus } from '@fortawesome/free-solid-svg-icons';
import ModalAdd from './ModalAdd'
const styles = {
	form:{
		display:"none"
	},
	span:{
		marginTop:"20px",
		marginBottom:"20px",
		marginLeft:"0px",
		marginRgith:"0px",
		position:"initial"
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
	const [modalOpen, setModalOpen] = useState(false);
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

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
const showForm = () =>{
	setModalOpen(true)
}
	return (
		<li style={styles.span} className={'list-group-item'}>
		{modalOpen && <ModalAdd setOpenModal={setModalOpen} />}
			<div className='d-flex justify-content-center'>
				<span style={styles.span} className='align-items-center'>
				<FontAwesomeIcon style={styles.icono} icon={faPlus} onClick={showForm}/>
				</span>
			</div>
		</li>
		
	);
};

export default AddTodoForm;
