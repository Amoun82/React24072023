import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0) // 1) - on initialise un state à 0
  const [idCounter, setIdCounter] = useState(0) // 1) - on initialise un state à 0

 /**
  * 4) - On crée notre function start.
  * @setInterval 
  * Exécute une instruction de manière répétée toutes les millisecondes définit.
  * (1000ms = 1 seconde)
  */
  const start = () => {
    /**
     * 5) - On crée un identifiant de timer
     * Un appel à setInterval renvoie un identifiant de timer (id / idCounter) 
     * que l'on peut utiliser pour annuler
     * l'exécution de la fonction.
    */
    const id = setInterval(() => { 
      /**
       * setCounter recevra la valeur précédente de l’état local 
       * et renverra une nouvelle valeur de l’état local.
       */
      setCounter(counter => counter + 1)
    }, 1000)
    setIdCounter(id) // setIdCounter recevra une nouvelle valeur (la valeur du setInterval générée).
  }

 /**
  * 7) - On crée notre function stop.
  * @clearInterval 
  * Afin d'annuler le setInterval il est necessaire d'appeler clearInterval(id)
  */
  const stop = () => {
    clearInterval(idCounter)
  }

  /**
  * 10) - On crée notre function reset.
  * @clearInterval 
  * Afin d'annuler le setInterval il est necessaire d'appeler clearInterval(id)
  */
  const reset = () => {
    clearInterval(idCounter)
    setCounter(0) // 8) - une fois que le timer est clear on remet notre state à 0 
  }

  return (
    <div className="App">
        {counter} {/* 2) -  On afficher notre state counter */}
        <button onClick={start}>Start</button> {/*  3) -  On crée le button pour start pour lancer notrer counter avec l'event onClick  */}
        <button onClick={stop}>Stop</button> {/*  6) -  On crée le button pour stop pour stopper counter avec l'event onClick  */}
        <button onClick={reset}>Reset</button> {/*  9) -  On crée le button pour stop pour stopper counter avec l'event onClick  */}
    </div>
  );
}

export default Counter;
