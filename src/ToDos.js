import React, { useState } from 'react'
import ToDo from './ToDo'
import './index.css'

function ToDos() {

  const [todos, updateTodos] = useState({
    todos: [{
      task: "Feed Blair",
      done: false
    }, {
      task: "clean apartment",
      done: false
    }, {
      task: "create debugging assignment",
      done: true
    }],
    newTodo: ''
  })

  const handleDone = (idx) => {
    updateTodos(newState => {
      return {
        ...newState,
        todos: newState.todos.map((t, i) => idx === i ? ({ ...t, done: !t.done }) : t)
      }
    })
  }

  const handleChange = (e) => {
    e.persist();
    updateTodos(newState => ({ ...newState, newTodo: e.target.value }));
  }

  const addTodo = (e) => {
    e.preventDefault();

    updateTodos(newState => {
      const updatedTodos = [...newState.todos]
      updatedTodos.push({
        task: newState.newTodo,
        done: false
      });
      return {
        todos: updatedTodos,
        newTodo: ''
      }
    })
  }

  return (
    <div>
      <h1>Things to do today...</h1>
      <form onSubmit={addTodo}>
        <label>
          <input
            type="text"
            placeholder="What do you need to do today?"
            value={todos.newTodo}
            onChange={handleChange}
          />
        </label>
      </form>


      <div className="todo-container">
        {todos.todos.map((todo, idx) => {
          return <ToDo
            task={todo.task}
            done={todo.done}
            handleDone={() => handleDone(idx)}
            key={idx}
          />
        })}
      </div>
    </div>
  )

}

export default ToDos
