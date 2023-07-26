import React, { useState } from 'react'

const TodoList = () => {

    const [listToDo, setListToDo] = useState([]) ;
    const [champ, setChamp] = useState() ;
    const [test, setTest] = useState(false) ;

    const pStyle = {
    textDecoration: "line-through"
    };

    const pStyleNone = {
    textDecoration: "none"
    };

    function handleSubmit(event) {
        event.preventDefault();
        // console.log(event.target) ;
        console.log(`le champ : ${champ}`)
        
        setListToDo(listToDo => [...listToDo,champ]) ;
        setChamp('') ;
        event.target.reset() ;
        console.log(listToDo) ;
    }

    const handleChange = (event) => {
        const { value } = event.target ;
        setChamp(value) ;
        console.log(champ) ;
    }

    const handleClick = (value) => {
        console.log('test du click') ;
        console.log(value) ;
        setListToDo(listTodo => {
            return listTodo.filter(list => list !== value )
        })
    }

    return (
        <div>
            <div>
                {listToDo.map((list, index) => {
                    let textBarre = false ;
                    return (
                        <div key={index}>
                            <p 
                                style={ textBarre && test ? {pStyleNone} : {pStyle}} 
                                onClick={() => {
                                    console.log("clique sur la tache")
                                    textBarre = !textBarre;
                                    console.log(textBarre) ;
                                    setTest(!test) ;
                                    console.log('state de test',test) ;
                                }} 
                                
                                >
                                    {list}
                                    <button onClick={() =>handleClick(list)}>supprimer</button>
                                </p>
                        </div>
                    );
                })}
                {console.log('voici la bonne valeur',listToDo)}
            </div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="Todo">liste à faire</label>
                <input name='Todo' type="text" id='Todo' onChange={handleChange} />
                <button>Valider</button>
            </form>

        </div>
    )
}

export default TodoList