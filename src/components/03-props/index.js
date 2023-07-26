import React, { useState } from 'react'
import Enfant from './enfant';

const Home = () => {

    const [prenom, setPrenom] = useState('Stef');
    const [age, setAge] = useState(42);
    const [ville, setVille] = useState('Meaux');


  return (
    <div>
        ------------
        <Enfant
            prenom={prenom}
            age={age}
            ville={ville}
        />
        ------------
    </div>
  )
}

export default Home