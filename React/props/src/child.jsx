import React from 'react'

const Child = ({text}) => {
  return (
    <div>
      {text}
      <h3>received in child</h3>
    </div>
  )
}

export default Child
