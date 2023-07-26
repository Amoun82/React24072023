import React, { useState } from 'react'
import './todo.css'

const TodoCorrection = () => {

    const [todo,setTodo] = useState({
        task: '',
        array: []
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setTodo(todo => ({ ...todo, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        todo.array.push({
            name:todo.task,
            isActive: true
        })
        console.log(todo.array)

        event.target.reset()
        // Réinitialise le formulaire
        
        setTodo(todo => ({ ...todo, task: ''}))
        // Met à jour la propriété 'task' de 'todo' avec une chaine vide
    }

    const deleteTask = (indexTask) => {
        const arrayAfterDeleteTask = todo.array.filter((task, index) => {
        if(index !== indexTask){ 
            return task
        }
        })
        setTodo({array: arrayAfterDeleteTask})
    }

    const updateTask = (indexTask) => {
        // filter
        const arrayAfterUpdate = todo.array.filter((task, index) => {
            console.log(task.isActive) ;
            if(index === indexTask){ 
                task.isActive = !task.isActive ;
            }
            return task ;
        })
        setTodo({array: arrayAfterUpdate}) ;
    }

    return (
        <div>
        <h1>Todo 🚀</h1>
        {todo.array.map((task, index) => (
            <div key={index}>
            <p className={task.isActive ? '' : 'text'} onClick={() => updateTask(index)}>{task.name}</p>
            <button onClick={() => deleteTask(index)}>delete</button>
            </div>
        ))
        }
        <form onSubmit={handleSubmit} >
            <input
            type='text'
            placeholder='add task'
            name='task'
            onChange={handleChange}
            />
            <button>valider</button>
        </form>
        </div>
    )
}

export default TodoCorrection