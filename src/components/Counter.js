import React, { useState } from 'react';

const initialState = 0
const Counter = () => {
    const [initCounter, setInitCounter] = useState(initialState);

    const incrementHandler = (e) => {
        e.preventDefault();
        setInitCounter(initCounter + 1);
    };

    const decrementHandler = (e) => {
        e.preventDefault();
        setInitCounter(initCounter - 1);
    };

    const resetHandler = (e) => {
        e.preventDefault();
        setInitCounter(initialState);
    }
    return (
        <div>
            <div>{initCounter}</div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={resetHandler}>Reset</button>
        </div>
    );
}

export default Counter;
