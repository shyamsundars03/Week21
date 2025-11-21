import React from 'react'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Content from './content'
import Funtoclass from './funtoclass'
import Button from "./button"
import Usecallback from './Usecallback'
const App = () => {

  return (
    <div>
      {/* <Header/>
      <Content/>
      <Footer/>
      <Funtoclass/>
      <Button text={"heeloo"}  color={"red"}  />
      <Button text={"heeloo"} /> */}

<Usecallback />

    </div>
  )
}

export default App


//1. Create a Header, Footer, and Content component and render them in App.js.
//2. Convert a functional component to a class component.
//3. Create a reusable Button component that accepts text and color props.

