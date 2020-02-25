import React from "react";
import "./buttons.css";

function ButtonAC({give0}) {

    const ac = () => {
        give0();
        console.log(`annihilated`);
    };
    return (
        <div>
            <button onClick={ac}>AC</button>
        </div>
    )
};

export default ButtonAC;