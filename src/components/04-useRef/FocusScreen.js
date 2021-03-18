import React, { useRef } from 'react'


import '../01-useState/counter.css';

export const FocusScreen = () => {

    const inputRef = useRef();
    const handleClick = () => inputRef.current.select()

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />
            <input
                ref={inputRef}
                className="form-control"
                placeholder="Your name"
            />
            <button
                className="btn btn-outline-success mt-5"
                onClick={handleClick} >
                Focus
        </button>
        </>
    )
}
