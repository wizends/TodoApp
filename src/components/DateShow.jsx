import React from "react";

const styles = {
    p: {
        display: "inline",
        float: "right",
        margin: "0"
    }
}

const DateShow = () => {
    const separator = "/"
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return(
        <span style={styles.p}>Hoy:{`${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`}</span>
    );
}
export default DateShow;