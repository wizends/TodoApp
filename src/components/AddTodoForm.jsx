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
