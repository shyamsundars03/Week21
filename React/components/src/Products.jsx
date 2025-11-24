import React from 'react'
import Cart from './Cart'
import { useState } from 'react'
import { useEffect } from 'react'
const Products = () => {

const [products , setProducts] = useState([])

useEffect(()=>{

fetch("https://fakestoreapi.com/products")
.then((data)=> data.json())
.then((d)=> setProducts(d))
.catch((e)=> console.log(e))


},[])

const handleCart = (id)=>{

    return id
}




  return (
    <div>
<h1>Products:</h1>

{products.length   }


    {products.map((i)=>(
    <ul>
    <li key={i.id}>{i.title}</li>
    <li>{i.price}</li>
    <button onClick={()=>handleCart(i)} >add to cart </button>
     </ul>
    ))}


     <Cart  handleCart={handleCart}  /> 
    </div>
  )
}

export default Products
