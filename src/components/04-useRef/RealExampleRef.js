import React, { useState } from 'react'

import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import '../01-useState/counter.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);
    return (
        <>
            <h1>RealExampleRef</h1>
            <hr />

            {show && <MultipleCustomHooks />}

            <br />
            <button className="btn btn-success m-2" onClick={() => {
                setShow(!show);
            }}>
                Show / Hide
            </button>

        </>
    )
}
