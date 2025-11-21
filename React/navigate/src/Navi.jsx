import React from 'react'

import { Home, About } from './App'
import {BrowserRouter, Routes, Route} from "react-router-dom"
const Navi = () => {
  return (
<BrowserRouter>
<Routes>
<Route  path='/home' element= {<Home/>}   />
<Route  path='/about' element= {<About/>}  />
</Routes>
</BrowserRouter>
  )
}

export default Navi
