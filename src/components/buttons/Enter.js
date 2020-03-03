import React from 'react';
import "./buttons.css";

function Enter(props) {

    const numEnter = () => {
        props.enterNumber();
        console.log(`entered`)
    };

    return (
            <button className="enter-btn" onClick={numEnter}>ENTER</button>
    );
}

export default Enter