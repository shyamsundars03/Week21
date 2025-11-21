import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const Count = () => {

const [count, setCount] = useState(0)

const countRef = useRef(1)

useEffect(()=>{

    countRef.current+= 2-1

},[count])




  return (
    <div>
      count : {count}
       countref : {countRef.current}
      <button onClick={()=> setCount(count+1)}   >clik to count</button>
    </div>
  )
}

export default Count
