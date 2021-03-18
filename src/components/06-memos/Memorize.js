import React, { useState } from 'react';


import { useCounter } from '../01-useState/hooks/useCounter';
import { Small } from './Small';

import '../01-useState/counter.css';

export const Memorize = () => {

    const { state: counter,
        increment,
    } = useCounter(1);

    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Memorize</h1>
            <hr />
            <h3>Counter: <Small value={counter} /></h3>
            <button className="btn btn-primary" 
                onClick={() => increment(1)}> 
                +1 
            </button>
            <button className="btn btn-outline-primary"
                 onClick={() => setShow(!show)}> 
                 Show / Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
