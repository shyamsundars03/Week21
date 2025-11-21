import React from 'react'

const button = ({text , color}) => {

const propStyle = {
    color : color || "green"
}

  return (
    <div>
      <button  style={propStyle}  >{text}</button>
    </div>
  )
}

export default button
