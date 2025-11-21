import React from 'react'
import { useState } from 'react'

const Counter = () => {

const [count,setCount ] = useState(0)

const incre = ()=>{
    setCount((c)=>c+1)
}

const decre = ()=>{
    setCount((c)=>c-1)
}

const reset = ()=>{
    setCount(0)
}
  return (
    <div>
      {count}
      <button onClick={incre}   >incre</button>
      <button onClick={decre}  >decre</button>
      <button onClick={reset}  >reset</button>
    </div>
  )
}

export default Counter
