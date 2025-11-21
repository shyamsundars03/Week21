import React from 'react'
import { useState } from 'react'

const Toggle = () => {

const [tog,setTog] = useState(false)

const handleTog = () =>{
    setTog((c)=>!c)
}


  return (
    <div>
      {tog}
      {tog && <h2>this is trueee</h2>}
      <button onClick={handleTog}  >clike to togg;er</button>
    </div>
  )
}

export default Toggle
