import React, { useCallback, useState } from 'react';

import { ShowIncrement } from './ShowIncrement';


import '../01-useState/counter.css';
export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(
        (accout = 5) => {
            setCounter(counter =>counter + accout);
        },
        [setCounter]
    );

    return (
        <>
            <h1>CallbackHook</h1>
            <hr />
            <p>{counter}</p>
            {/* <button onClick={increment}>+1</button> */}
            <ShowIncrement increment={increment} />
        </>
    )
}
