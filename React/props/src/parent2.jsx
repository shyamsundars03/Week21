import React from 'react'
import { useState } from 'react'
import Child2 from './child2'
const parent2 = () => {

const [count , setcount] =  useState(0)


  return (
    <div>
        {count}

<Child2  handleCount = {setcount}  />
      
    </div>
  )
}

export default parent2
