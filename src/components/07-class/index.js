/* Objectif : Mettre à jour un state grâce à sa classe enfant.

Créez une classe Parent dans laquelle vous aurez un state appelé "title". Affichez ce state dans une balise h1.

Ce state doit être transmis en tant que props à la classe enfant que vous devez également implémenter.

Grâce à la classe enfant, nous devons être en mesure d'écrire une nouvelle valeur pour le state "title" de la classe parent, ce qui permettra de le mettre à jour. */

import React from "react";
import Enfant from "./enfant";

class Parent extends React.Component {
    
    state = {title: 'Mon titre'};
    
    render() {
        return (
        <div>
            <Enfant title={this.state.title} />
            <h1>Hello, {this.state.title}</h1>
        </div>
        );
    }
    
}

export default Parent ;