import React from "react";
import "./buttons.css";

function ButtonAC({give0}) {

    const ac = () => {
        give0();
        console.log(`value was set to 0`);
    };
    return (
        <div>
            <button onClick={ac}>AC</button>
        </div>
    )
};

export default ButtonAC;