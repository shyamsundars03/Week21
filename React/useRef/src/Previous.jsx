import React from 'react'
import { useEffect } from 'react'
import { useState , useRef } from 'react'

const Previous = () => {

const [name, setName] = useState("")
const nameRef = useRef("")

const handlePrev = () =>{
nameRef.current =  name
}





  return (
    <div>
      <input  value={name}  onChange={(e)=>setName(e.target.value)} />

 name : {name}
 nameref : {nameRef.current}
 <button onClick={handlePrev}   >clik</button>
    </div>
  )
}

export default Previous
