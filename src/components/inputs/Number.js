import React from 'react';
import "./inputs.css";
import App from "../../App";

function Number(props) {

    const setNum = () => {
        props.changeNumber();
        console.log(`number has been set`)
    };

    return (
            <input type='number' id="inputNumber" onInput={setNum} placeholder={"Set your number here"} className="btn-group"></input>
    );
}

export default Number