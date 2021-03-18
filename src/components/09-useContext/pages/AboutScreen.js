import React, { useContext } from 'react'


import '../../01-useState/counter.css';
import { UserContext } from '../context/UserContext';

export const AboutScreen = () => {

    const {user} = useContext(UserContext);
    console.log(user);
    
    return (
        <div className="container">
        <h1>About</h1>
        <hr/>
        <pre>
        { JSON.stringify(user,null, 3)}
        </pre>

        </div>
    )
}
