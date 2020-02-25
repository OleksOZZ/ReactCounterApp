import React from "react";
import "./buttons.css";

function ButtonIncrHundred({incrHundred}) {

    const incr100 =() => {
        incrHundred();
        console.log(`increased: +100`);
    };

    return (
        <div>
            <button onClick={incr100}>+100</button>
        </div>
    )
}

export default ButtonIncrHundred