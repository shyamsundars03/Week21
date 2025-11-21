import React, { useCallback, useState } from 'react'

const Child = ({count})=>{
console.log("child rerrendered")
return(
    <>
    <h1>this is Child</h1>
    {count}
    </>
)


}



const Usecallback = () => {

const [count, setCount] = useState(0)

const [text,setText] = useState("")

const handleCount = useCallback(()=>{
     console.log("count updated")
    setCount((p)=>p+1)
},[])



    console.log("parent comp re renders")



  return (
    <div>

<Child count = {count}  />
<button onClick={handleCount}  ></button>
<input type='text' onChange={(e)=>setText(e.target.value)}   />
      
    </div>
  )
}

export default Usecallback
