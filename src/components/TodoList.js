import React from 'react'

export default({current, tasks, myEvent}) => {
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
        onClick={() => myEvent(id)}
        style={{textDecoration: completed ? 'line-through' : 'none'}}
        >{description}</li>
      ))}
    </ul>
  )
}
