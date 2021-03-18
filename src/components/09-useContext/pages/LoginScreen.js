import React, { useContext } from 'react'

import '../../01-useState/counter.css';
import { UserContext } from '../context/UserContext';

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);
  
    const handlerLogin = ()=>{
        setUser({
            name: 'jorge',
            email: 'jorge@gmail.com'
        });
    }
    return (
        <div className="container">
            <h1>Login</h1>
            <hr />
            <button onClick={handlerLogin} className="btn btn-primary" >Login</button>
        </div>
    );
}
