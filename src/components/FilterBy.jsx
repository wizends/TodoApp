import React from 'react';
import { useSelector } from 'react-redux';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
    button: {
        display:"flex",
        alignItems:"center",
        cursor:"pointer"
    },
    div:{
        position:"fixed",
        width:"200px",
        right:"20%",
        zIndex:"99",
        visibility:"hidden"
    }
}
const showOrderList = () =>{
    const visible = document.getElementById("visible");
    if(visible.style.visibility == "visible"){
        visible.style.visibility = "hidden"
    }else{
        visible.style.visibility = "visible"
    }
    
}
const closeOrderList = () =>{
    const visible = document.getElementById("visible");
    visible.style.visibility = "hidden"
}

const FilterBy = () => {
	return (
        <div>
            <span style={styles.button} onClick={showOrderList}><FontAwesomeIcon icon={faFilter}/>Ordenar</span>
        <div  id="visible"  className="card" style={styles.div}>
            <span className='d-flex align-items-center'><input type="checkbox"></input><label>Fecha de creación</label></span>
            <span className='d-flex align-items-center'><input type="checkbox"></input><label>Fecha vencimiento</label></span>
            <span className='d-flex align-items-center'><input type="checkbox"></input><label>Estado de tarjeta</label></span>
        </div>
        </div>
        
    );
};

export default FilterBy;