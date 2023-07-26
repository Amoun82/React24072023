import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

const Article = () => {

    //useParam()
    //useLocation()
    const routeParams = useParams() ;

    const { id } = routeParams ;

    const stateParams = useLocation() ;

    const { titre } = stateParams.state ;

    return (
        <div>
            {console.log(routeParams)}
            {console.log(stateParams)}
            <h1>
                {stateParams.state.titre}
            </h1>
            <h1>
                {titre}
            </h1>
            <p>id : {routeParams.id}</p>
            <p>id : {id}</p>
        </div>
    )
}

export default Article