import { Routes, Route } from "react-router-dom";

import './App.css';
import Exemple from './components/00-intro';
import Counter from './components/01-state/state';
import Price from './components/01-state/useEffect';
import Chrono from './components/02-tp_counter';
import Home from './components/03-props';
import Form from './components/04-form';
import TodoList from './components/05-todoList';
import TodoListCorrection from './components/05-todoList/correction';
import Header from "./components/06-nav-link/header";
import Article from "./components/06-nav-link/article";
import Parent from "./components/07-class";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/home" element={<Home />} />
        <Route path="/exemple" element={<Exemple />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/price" element={<Price />} />
        <Route path="/chrono" element={<Chrono />} />
        <Route path="/form" element={<Form />} />
        <Route path="/todoList" element={<TodoList />} />
        <Route path="/correctTodoList" element={<TodoListCorrection />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/class" element={<Parent />} />
      </Route>
    </Routes>
  );
}

export default App;
