import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const filterHandler = () => {
  switch(status){
    case "completed":
      setFilteredTodos(todos.filter(todo => todo.completed === true));
      break;
      case "uncompleted" :
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
  }
};
  //use only once
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  
  // local save

  
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Anil's Todo List</h1>
      </header>
      <Form inputText={inputText}
      todos={todos} setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}
       />
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
