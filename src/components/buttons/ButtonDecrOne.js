import React from 'react';
import "./buttons.css";

function ButtonDecrOne({decrFunc}) {

    const decrOne = () => {
        decrFunc();
        console.log(`decreased: -1`)
    };

    return (
        <div>
            <button onClick={decrOne}>Decrease 1</button>
        </div>
    );
}

export default ButtonDecrOne