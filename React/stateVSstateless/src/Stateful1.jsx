import React, { useEffect } from 'react'
import { useState } from 'react'
const Stateful1 = ({value}) => {


const [val , setVal] = useState(value < 18 ? "he is minor" : "he is major" )

useEffect(()=>{

setVal(value < 18 ? "he is minor" :  "he is major" )

},[value])





  return (
    <div>
      <h3>Everyone !!...{val}</h3>
    </div>
  )
}

export default Stateful1
