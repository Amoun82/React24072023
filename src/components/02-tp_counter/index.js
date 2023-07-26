import React, { useState } from 'react'


/* TP Counter : 
Réaliser un counter 
On doit pouvoir lancer un counter et le mettre en pause.
Et réinitialiser notre counter à 0 quand on le souhaite.
Vous allez avoir besoin d'utiliser la méthode "setInterval" et "clearInterval". 
useEffect() interdito 
Bon chance */

const Chrono = () => {
    const [chrono, setChrono] = useState(0) ;

    const [idTimer, setIdTimer] = useState() ;
    
    
    const start = () => {

        const id = setInterval(() => {
            setChrono(chrono => chrono + 1) ;
        }
        , 1000);
        console.log(id);
        setIdTimer(id) ;
    }

    const stop = () => {
        clearInterval(idTimer);
    }

    const reset = () => {
        clearInterval(idTimer);
        setChrono(0) ;
    }

  return (
    <div>
        <h1>
            Chrono
        </h1>
        <p>counter : {chrono}</p>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <button onClick={reset}>Reset</button>
    </div>

  )
}

export default Chrono