import React from 'react'
import { useRef } from 'react'
import { forwardRef } from 'react'


const Child = forwardRef((props, ref)=>{

return <input  ref={ref}       />

})





const Focused = () => {

const nameRef = useRef("")

const handleFocus =()=>{

nameRef.current.focus()


}

  return (
    <div>
      
    <Child  ref={nameRef}  />
<button onClick={handleFocus}    >clik to focus form parent</button>

    </div>
  )
}

export default Focused
