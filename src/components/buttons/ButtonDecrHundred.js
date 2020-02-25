import React from "react";
import "./buttons.css";

function ButtonDecrHundred({decrHundred}) {

    const decr100 =() => {
        decrHundred();
        console.log(`decreased: -100`);
    };
    return(
        <div>
            <button onClick={decr100}>Minus 100</button>
        </div>
    )
}

export default ButtonDecrHundred