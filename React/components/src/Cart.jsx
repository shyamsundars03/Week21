import React from 'react'
import { useState } from 'react'

const Cart = ({handleCart}) => {

const [item, setItem] = useState([])

const handleItem = ()=>{

setItem((i)=> handleCart )

}




  return (
    <div>
        <h1>Cart</h1>
        
{item}
      
    </div>
  )
}

export default Cart
