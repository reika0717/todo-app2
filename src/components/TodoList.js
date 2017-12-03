import React from 'react'

export default({tasks, myEvent}) => {
  return(
    <ul>
      {tasks.map(({id, description, completed}) =>(
      <li
        key={id}
        onClick={() => myEvent(id)}
        style={{textDecoration: completed ? 'line-through' : 'none'}}
        >{description}</li>
      ))}
    </ul>
  )
}
