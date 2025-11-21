import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Home = ({name,color}) => {

const handleEvent ={

color: color

}



  return (
    <>
    <Header />
    <h1 style={handleEvent}  >this is home {name}</h1>
    
    <Footer/>
    </>
  )
}

export default Home