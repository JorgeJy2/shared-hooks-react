import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

import '../../01-useState/counter.css';

export const HomeScreen = () => {

    const {user, setUser} = useContext(UserContext);
    console.log(user);
    const handlerLogin = ()=>{
        setUser({

        });
    }
    return (
        <div className="container">
         <h1>Home</h1>
         <hr/> 
         <pre>
             { JSON.stringify(user,null, 3)}
             </pre>  

             <button onClick={handlerLogin} className="btn btn-danger" >Logout</button>
        </div>
    )
}
