import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navi from './Navi'

export const About = () =>{


const Navigate = useNavigate()

  return(
    <>
    <h1>hi from baout</h1>
          <button  onClick={()=> Navigate("/home")}   >clik</button>
    </>
  )
}

export  const Home = () =>{

  const Navigate =  useNavigate()

  return(
    <>
    <h1>hi from Home</h1>
          <button  onClick={()=> Navigate("/about")}   >clik</button>
    </>
  )
}

const App = () => {

  return (
<>
    <Navi/>
   <h3>hellooooooo</h3>
    </>
  )
}






export default App
