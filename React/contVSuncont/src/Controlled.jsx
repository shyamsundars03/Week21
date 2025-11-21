import React from 'react'
import { useState } from 'react'

const Controlled = () => {

const [txt , setTxt] = useState("")
 const handleSubmit = (e) =>{
        e.preventDefault()

alert(`the value is  :${txt}`)
 }


console.log("re renderd")



  return (
    <div>
        <h3>this is continonal</h3>
      <form  onSubmit={handleSubmit}   >

    <input type='text' value={txt}  onChange={(e)=> setTxt(e.target.value)} />

<button type='submit'   >click to submit</button>
      </form>

      {txt}
    </div>
  )
}

export default Controlled
