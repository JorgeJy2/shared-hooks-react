import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../01-useState/hooks/useCounter';
import { useFetch } from '../03-examples/hooks/useFetch';

import '../01-useState/counter.css';
import './layout-effect.css';

export const LayoutEffect = () => {
    const initQuote = 1;

    const { state: actualNumberQuote,
        increment,
        decrement,
        reset } = useCounter(initQuote);

    const [boxSize, setboxSize] = useState({});


    let { data, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${actualNumberQuote}`);
    const { author, quote } = !!data && data[0];



    const pTag = useRef();

    useLayoutEffect(() => {
        const boxSize = pTag.current.getBoundingClientRect();
        console.log(boxSize);
        setboxSize(boxSize);
    }, [quote]);

    return (
        <>
            <h1>LayoutEffect</h1>
            <hr />
            { error && <div className="alert alert-danger text-center" id="loading">Error</div>}

            <blockquote className="blockquote text-right">
                <h3 ref={pTag}
                    className="md-0">{quote}</h3>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
            <br />
            <p>Quote number {actualNumberQuote} </p>
            <button className="btn btn-success m-2" onClick={() => increment(1)}>Next quote</button>
            {actualNumberQuote != 1 && <button className="btn btn-success m-2" onClick={() => reset()}>Reset</button>}
            {actualNumberQuote > 1 && <button className="btn btn-success m-2" onClick={() => decrement()}>Before</button>}

                <pre>{JSON.stringify(boxSize, null, 3)}</pre>
            
        </>
    )
}
