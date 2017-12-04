import React from 'react'

export default({children, myEvent}) => {
  return(
      <button
        onClick={myEvent}>{children}</button>
  )
}
