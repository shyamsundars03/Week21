import React from 'react'
import { useRef } from 'react'

const focus = () => {


const inputRe= useRef(null)

const handleFocus = ()=>{

inputRe.current.focus()

}


  return (
    <div>
      <input ref={inputRe}    />
      <button  onClick={handleFocus}  >clik</button>
    </div>
  )
}

export default focus
