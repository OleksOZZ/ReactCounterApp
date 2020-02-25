import React, {Component} from 'react';
import PropTypes from 'prop-types';

function Button ({myFunc}) {

    const plusOne = () => {
        myFunc();
        console.log(`increased; +1`);
    };
        return (
            <div>
                <button onClick={plusOne}>ADD 1</button>
            </div>
        );
}

export default Button;