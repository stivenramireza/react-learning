import React, { useState, Fragment } from 'react';

const Counter = () => {
    
    const [number, setNumber] = useState(0);

    const increase = () => {
        console.log('Click')
        setNumber(number + 1)
    }

    return (
        <Fragment>
            <h3>My first component {number}</h3>
            <button onClick={increase}>Increase</button>
        </Fragment> 
    );
}

export default Counter;