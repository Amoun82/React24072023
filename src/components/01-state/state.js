import React, { useState } from 'react'

function Counter() {

    const [title, setTitle] = useState("Counter 💨");
    const [counter, setCounter] = useState(0) ;
    return (
        <div>
            <h1>{title}</h1>
            <p>Counter : {counter}</p>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>Incrémente</button>
        </div>
    )
}

export default Counter