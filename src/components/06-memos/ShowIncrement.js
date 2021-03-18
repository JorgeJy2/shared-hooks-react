import React from 'react'

export const ShowIncrement = React.memo (( {increment}) => {
    console.log('me voy a generar. :(');
    return (
        <button onClick={()=>increment(5)}>
            +1
        </button>
    )
});