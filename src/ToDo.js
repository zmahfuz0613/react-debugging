import React from 'react'

function ToDo(props) {
  return (
    <h2 style={{
      textDecoration: props.done ? "line-through" : "none",
    }} className="todo" onClick={props.handleDone}>
      {props.task}
    </h2>

  )
}

export default ToDo
