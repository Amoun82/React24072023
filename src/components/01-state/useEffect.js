import React, { useEffect, useState } from 'react'

const Price = () => {
    const [prix, setPrix] = useState(25) ;
    const [total, setTotal] = useState(50) ;

    // useEffect(() => {
    //     alert('Welcome world') ;
    // }, []) ;
    
    useEffect(() => {
        if(total > 50)
        {
            alert(`la valeur de tolat a changé ${total}`) ;
        }
    }, [total]) ;

    return (
        <div>
            <h1>
                Price 🗯
            </h1>
            <p>Prix : {prix}</p>
            <p>Total : {total}</p>
            <button onClick={() => setPrix(prix +5)}>Incremente Price</button>
            <button onClick={() => setTotal(total + 5)}>Incremente Totale</button>
        </div>
    )
}

export default Price