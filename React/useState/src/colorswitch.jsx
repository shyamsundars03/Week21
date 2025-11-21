import React from 'react'
import { useState } from 'react'

const Colorswitch = () => {

const colors = ["red","blue","green","violet"]

const [ind , setInd] = useState(0)

const handleInd = ()=>{
    setInd((i)=>(i+1)% colors.length)
}

const divColor = (value)=>{
    return {
    color : white,
    backgroundColor : value 
    }

}

  return (
    <div>
<h3 style={divColor(colors[ind])}     >this is juat an color switcher</h3>
      <button onClick={handleInd}  >click to change </button>
    </div>
  )
}

export default Colorswitch
