import React from 'react'

function ToDo(props) {
  return (
    <h2 checked={props.todo} className="todo"
      onClick={props.handledone} style={{ text-decoration: props.done ? "line-through" : "none" }}>{props.task}</h2>

  )
}

export default ToDo
