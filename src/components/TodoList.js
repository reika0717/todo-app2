import React from 'react'
import store from '../store'
import { toggleTodoAction } from '../actions'

export default({current, tasks}) => {
  return(
    <ul>
      {tasks.filter(({completed})=>{
        switch (current) {
          case 'done':
            return completed
          case 'not yet':
            return !completed
          default:
            return true
        }
      })
        .map(({id, description, completed}) =>(
      <li
        key={id}
        onClick={() => store.dispatch(toggleTodoAction(id))}
        style={{textDecoration: completed ? 'line-through' : 'none'}}
        >{description}</li>
      ))}
    </ul>
  )
}
