import React, { Component } from 'react'
import ToDo from './ToDo'
import './App.css'

class ToDos {
  constructor() {

    this.stte = {
      todos: [{
        task: "Feed Blair",
        done: false
      }, {
        task: "clean apartment",
        done: false
      } {
        task: "create debugging assignment",
        done: true
      }],
      newTodo: ''
    }
  }

  handleDone(e, idx) {
    this.setState(prevState => {
      prevState.toos[idx].done = !prevState.todos[idx]done
      return prevState
    })
  }

  handleChange () {
    this.setState({
      newTodo: e.target
    })
  }


  addTodo (e) {
    e.preventDefault()

    this.setState(prevState => {
      prevState.todo.push({
        task: this.state.newTodo,
        done: false
      })
      prevState.new = ""
      return prevState
    })
  }

  render() {
    return (
        <h1>Things to do today...</h1>
        <form onSubmit={this.addTodo}>
          <label>
            <input
              type="text"
              placeholder="What do you need to do today?"
              value={this.state.todo}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <div class="todo-container">
          {this.state.todos.map((todo, idx) =>
            <ToDo
              ask={todo.task}
              todo={todo.done}
              handleDone={e => this.handleDone(e, idx)}
              key={idx}
            />
          )}
        </div>
    )
  }
}

export default ToDos
