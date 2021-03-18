import React, { useEffect, useState } from 'react'

import '../01-useState/counter.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        console.log('hey');
    }, []);


    useEffect(() => {
        console.log('formState');
    }, [formState]);


    useEffect(() => {
        console.log('formState email');
    }, [email]);

    const handlerInputChange = ({ target }) => {
        setformState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <>
            <h1>UseEffect</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    autoComplete="off"
                    value={name}
                    onChange={handlerInputChange}
                />

                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your email"
                    autoComplete="off"
                    value={email}
                    onChange={handlerInputChange}
                />
            </div>

            {(name === '123') && <Message/>}
        </>
    )
}
