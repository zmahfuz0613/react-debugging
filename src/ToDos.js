import React, { Component } from 'react'
import ToDo from './ToDo'
import './ToDos.css'

class ToDos extends Component {
  constructor(props) {
    super(props)

    this.state = {
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
    }
  }

  handleDone = (e, idx) => {
    this.setState(prevState => {
      prevState.todos[idx].done = !prevState.todos[idx].done
      return prevState
    })
  }

  handleChange = e => {
    this.setState({
      newTodo: e.target.value
    })
  }


  addTodo = e => {
    e.preventDefault()

    this.setState(prevState => {
      prevState.todos.push({
        task: this.state.newTodo,
        done: false
      })
      prevState.newTodo = ""
      return prevState
    })
  }

  render() {
    return (
      <div>
        <h1>Things to do today...</h1>
        <form onSubmit={this.addTodo}>
          <label>
            <input
              type="text"
              placeholder="What do you need to do today?"
              value={this.state.newTodo}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <div className="todo-container">
          {this.state.todos.map((todo, idx) =>
            <ToDo
              task={todo.task}
              done={todo.done}
              handleDone={e => this.handleDone(e, idx)}
              key={idx}
            />
          )}
        </div>
      </div>
    )
  }
}

export default ToDos
