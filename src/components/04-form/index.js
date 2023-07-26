import React, { useState } from 'react'

/*
Créer un formulaire qui contient deux champs de saisie : un champ pour le prénom et un autre pour le mot de passe.

L'objectif est de récupérer les saisies du formulaire et de les afficher sur notre page après l'envoi du formulaire, seulement si le prénom n'est pas vide.

Il faudra également vérifier si le prénom contient au minimum 3 caractères et que le mot de passe contient au minimum 9 caractères. Si ces conditions sont satisfaites, afficher un message de succès dans la console.log().

Assurez-vous que le prénom s'affiche sur la page uniquement après l'envoi du formulaire, et non avant.
*/

const Form = () => {

    const [message, setMessage] = useState('') ;
    const [user, setUser] = useState({
        prenom: "",
        password: "",
    }) ;

    function handleSubmit(event) {



        if(user.prenom === '' || user.prenom.length < 3)
            event.preventDefault();
        else
        {
            event.preventDefault();
            alert('envoye du formulaire') ;
            setMessage(`Bonjour ${user.prenom}`);
            console.log("votre formulaire est envoyé") ;
        }



    }

    const handleChange = (event) => {
        // console.log('test') ;
        const { name , value } = event.target ;
        // console.log(name);
        // console.log(value);


        /* if(name === 'prenom')
            setUser({prenom: value}) ;
        if(name === 'password')
            setUser({password: value}) */

        setUser((user) => ({ ...user, [name]: value }))

        console.log(user);
    };

    return (
        <div>
             <div>{message}</div>
            {/* <p>bonjour {user.prenom}</p> */}

            <form onSubmit={handleSubmit}>
                <label htmlFor="prenom">Prenom</label>
                <input
                    type="text"
                    placeholder='votre prenom'
                    name='prenom'
                    id='prenom'
                    onChange={handleChange}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder='votre password'
                    name='password'
                    id='password'
                    onChange={handleChange}
                />
                <button>valider</button>
            </form>

        </div>
    )
}

export default Form