import React, { useMemo, useState } from 'react';
import { useCounter } from '../01-useState/hooks/useCounter';
import { process } from './helpers/Process';

import '../01-useState/counter.css';

export const MemoHook = () => {

    const { state: counter,
        increment,
    } = useCounter(900);

    const memoProccess = useMemo(() => process(counter), [counter]);

    const [show, setShow] = useState(true);

    return (
        <>
            <h1>MemoHook</h1>
            <hr />
            <h3>Counter: <small> {counter} </small></h3>
            <p> {memoProccess}</p>
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
