import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleteAsync, deleteTodoAsync } from '../redux/todoSlice';
import { faXmark, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalEdit from './ModalEdit';
import { useState } from 'react';
import { Modal } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const styles = {
	checkBox: {
		marginRight: "5px"
	},
	card: {
		marginBottom: "15px",
		border: "solid 1px rgba(0,0,0,.125)",
		borderRadius: "10px",
		position: "initial"
	},
	col: {
		alignSelf: "center",
		textAlign: "end"
	},
	label: {
		fontSize: "0.7em"
	},
	icon: {
		margin: "5px"
	}
}

const TodoItem = ({ id, title, completed, date, dateToComplete }) => {



	const [modalOpen, setModalOpen] = useState(false);
	const [check, setCheck] = useState(false);
	const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(toggleCompleteAsync({ id, completed: !completed }));
	};

	const handleDeleteClick = () => {
		dispatch(deleteTodoAsync({ id }));
	};
	const handleEditClick = () => {
		setModalOpen(true);
	};


	return (
		<li style={styles.card} className={`list-group-item ${completed && 'list-group-item-success'}`}>
		{modalOpen && <ModalEdit todo={id} setOpenModal={setModalOpen} title={title} dateToComplete={dateToComplete} />}
			<Container>
				<Row>
					<Col sm={1} style={{ alignSelf: "center" }}>
						<input value={check} style={styles.checkBox} onChange={(event) => setCheck(event.target.check)} type='checkbox' className='mr-3' checked={completed} onClick={handleCheckboxClick}></input>
					</Col>
					<Col>
						<Row>
							<Col lg >
								<label id='title' >{title}</label>
							</Col>
						</Row>
						<Row>
							<Col>
								<span style={styles.label}>Fecha de creacion: {date}</span>
							</Col>

						</Row>
					</Col>
					<Col lg={2} style={{ alignSelf: "center"}}>
						<span style={styles.label}>Completar:<br />{dateToComplete}</span>
					</Col>
					<Col sm={3} style={{ alignSelf: "center", textAlign: "end" }}>
						<a style={styles.icon} id="edit" onClick={handleEditClick} >
							<FontAwesomeIcon icon={faPen} />
						</a>
						<a style={styles.icon} id="delete" onClick={handleDeleteClick} >
							<FontAwesomeIcon icon={faXmark} />
						</a>
					</Col>
				</Row>
			</Container>


		</li>
	);
};

export default TodoItem;
