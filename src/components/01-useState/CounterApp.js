import React, { useState } from 'react'
import './counter.css';

export const CounterApp = () => {

    const [stateCounter, setcounter] = useState({
        counter1: 10,
        counter2: 20
    });

    const { counter1, counter2 } = stateCounter;

    console.log(counter1, counter2);

    const handlearAdd = () => setcounter({
        ...stateCounter,
        counter1: counter1 + 1
    });

    return (
        <>
            <h1>Counter {counter1}</h1>
            <h1>Counter {counter2}</h1>
            <hr />
            <button className="btn btn-primary" onClick={handlearAdd}>+1</button>
        </>
    )
}
