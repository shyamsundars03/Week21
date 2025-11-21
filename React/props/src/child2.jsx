import React from 'react'

const child2 = ({handleCount}) => {

const handle = ()=>{
    handleCount((p)=>p+1)
}

  return (
    <div>
      <button onClick={handle}   >click</button>
    </div>
  )
}

export default child2
