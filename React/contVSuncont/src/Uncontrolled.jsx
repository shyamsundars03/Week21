import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const Uncontrolled = () => {

const txtRef = useRef()

const handleSubmit = (e) =>{

e.preventDefault()

alert(`this is uncntrolled ${ txtRef.current.value}`)



}

console.log("unnn renredere")
  return (
    <div>

<form onSubmit={handleSubmit}  >
<input type='text' ref={txtRef}  />
<button type='submit'   >clike to sumbit</button>

</form>

{/* {txt} */}
      
    </div>
  )
}

export default Uncontrolled
