import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './../redux/actions';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.count);

    const incrementHandler = () => {
        dispatch(increment());
    };

    const decrementHandler = () => {
        dispatch(decrement());
    };

    const resetHandler = () => {
        dispatch(reset());
    }

    return (
        <div>
            <div>{counter}</div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={resetHandler}>Reset</button>
        </div>
    );
}

export default Counter;
