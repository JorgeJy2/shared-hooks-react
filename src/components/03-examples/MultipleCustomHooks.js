import React from 'react'
import { useCounter } from '../01-useState/hooks/useCounter';
import { useFetch } from './hooks/useFetch';

import '../01-useState/counter.css';
export const MultipleCustomHooks = () => {
    const initQuote = 1;

    const { state: actualNumberQuote,
        increment,
        decrement,
        reset } = useCounter(initQuote);

    let { data, loading, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${actualNumberQuote}`);
    const { author, quote } = !!data && data[0];


    return (
        <>
            <h1>Custom hooks</h1>
            <hr/>
            { error &&  <div className="alert alert-danger text-center" id="loading">Error</div> }
            {loading ? 
                <div className="alert alert-info text-center" id="loading">Loading . . .</div>
                :
                <>
                    <blockquote className="blockquote text-right">
                        <h3 className="md-0">{quote}</h3>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                    <br/>
                    <p>Quote number {actualNumberQuote} </p>
                    <button className="btn btn-success m-2" onClick={() => increment(1)}>Next quote</button>
                    {actualNumberQuote != 1 && <button className="btn btn-success m-2" onClick={() => reset()}>Reset</button>}
                    {actualNumberQuote > 1 && <button className="btn btn-success m-2" onClick={() => decrement()}>Before</button>}
                </>
            }
        </>
    )
}
