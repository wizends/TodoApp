import React from 'react';
import { useSelector } from 'react-redux';

const styles = {
    button: {
        display: "inline",
        marginBottom:"20px",
        marginTop:"20px",
        color:"white",
        width:"150px"
    }
}

const MasiveDelete = () => {
	return (
        <button className="btn btn-success" style={styles.button}>Libera seleccionadas</button>
    );
};

export default MasiveDelete;