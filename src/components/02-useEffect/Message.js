import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [cors, setCors] = useState({x: 0 , y: 0});

    useEffect(() => {
        console.log('message ok')

        const maouseMove = (e) => {
            const coors = {x: e.x, y: e.y};
            setCors(coors);
             console.log(coors);
        }

        window.addEventListener('mousemove',maouseMove);

        return () => {
            console.log('clean nnn ')
            window.removeEventListener('mousemove',maouseMove);
        }
    }, [])

    return (
        <div>
            <h3>Message</h3>
            <p>X: {cors.x}</p>
            <p>Y: {cors.y}</p>
            
        </div>
    )
}
