import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Mounted = () => {

const [c, setC] = useState(0)

const [name , setName] = useState("")
const [text , setText] = useState("")



useEffect(()=>{

console.log("mounted")


return () =>{
  console.log("unmounted")
}


},[name])



  return (
    <div>
      <h3>the count  :{c}</h3>
      <button onClick={()=>setC(c+1)}    >  click</button>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}   />
      {name}
      <input type='text' value={text} onChange={(e)=>setText(e.target.value)}   />
      {text}
    </div>
  )
}

export default Mounted
