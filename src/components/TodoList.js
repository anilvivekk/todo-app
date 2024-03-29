import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
            <Todo
             setTodos={setTodos} 
             key={todo.id} 
             todos={todos}
             todo={todo}
             text={todo.text}  />
        ))}
      </ul>
    </div>
  )
}
