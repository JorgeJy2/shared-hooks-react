import React, { useEffect } from 'react'

import '../01-useState/counter.css';
import { useForm } from './hooks/useForm';

export const FormWithCustomHook = () => {

    const [formValues, handlerInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;


    useEffect(() => {
       console.log('name change..');
    }, [name]);


    const handlerSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues);
    }

  
    return (
        <form onSubmit={handlerSubmit}>
            <h1>FormWithCustomHook</h1>
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


<input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Your password"
          
                    value={password}
                    onChange={handlerInputChange}
                />
            </div>

        <button className="btn"> save!</button>
          
        </form>
    )
}
