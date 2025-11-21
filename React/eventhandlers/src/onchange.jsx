import React, { useState } from 'react'

const onchange = () => {

const [txt, setTxt] = useState("")




  return (
    <div>
        {txt}
<input value={txt} onChange={(e)=>setTxt(e.target.value)}   ></input>      
    </div>
  )
}

export default onchange
