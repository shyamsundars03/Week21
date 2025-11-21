import React, { useState } from 'react'

const Btn = () => {

const arr = ["apple","mango","banana","grapes","tomato"]

const [ind , setInd] = useState(0)

const handleInd =()=>{
    setInd((i)=> (i+1)%arr.length )
}

  return (
    <div>
      {arr[ind]}
      <button onClick={handleInd}  >shift</button>
    </div>
  )
}

export default Btn
