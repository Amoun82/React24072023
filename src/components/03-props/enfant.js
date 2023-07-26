import React from 'react'

const enfant = (props) => {

    // const prenom = props.prenom ;
    // const age = props.age ;
    // const ville = props.ville ;

    /**
   
@Destructuration
De cette manière, vous sécurisez votre propriété qui ne sera pas modifiable 
(comme on déstructure dans une const),
et c'est important que ce soit le cas!
permet directement de déclarer une variable
et de lui assigner la valeur d'une propriété d'un objet.
*/

    const { prenom , ville , age } = props;

    return (
        <div>
            <p>hello {prenom} 👏 !!!</p>
            <p>Age : {age}</p>
            <p>Ville : {ville}</p>
        </div>
    )
}

/* function Enfant2({prenom , ville , age }) {
    return (
        <div>
            <p>hello {prenom} 👏 !!!</p>
            <p>Age : {age}</p>
            <p>Ville : {ville}</p>
        </div>
    )
} */

export default enfant