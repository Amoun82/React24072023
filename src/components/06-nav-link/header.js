import React, { useState } from 'react'
import { Link , Outlet } from 'react-router-dom'

const Header = () => {

    const [id,setId] = useState(12) ;

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to='exemple'>Intro</Link>
                        </li>
                        <li>
                            <Link to='counter'>Compteur</Link>
                        </li>
                        <li>
                            <Link to='home'>Home</Link>
                        </li>
                        <li>
                            <Link to='chrono'>Chrono</Link>
                        </li>
                        <li>
                            <Link to={{ pathname: `article/${id}` }}
                            state={{ titre: 'page article 🎁' }}
                            >
                                Article
                            </Link>
                        </li>
                        <li>
                            <Link to='/todolist'>Todo List</Link>
                        </li>
                        <li>
                            <Link to='/correctTodoList'>Todo List Correction</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <section>
                <Outlet />
            </section>
        </div>
    )
}

export default Header