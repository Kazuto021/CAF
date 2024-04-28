import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import App from '../App'
import Home from '../Screens/Home'
import Special from '../Screens/Special'

const MainRoute = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='' Component={App}/>
        <Route path='/home' Component={Home}/>
        <Route path='/special' Component={Special}/>
    </Routes>
    </BrowserRouter>
  )
}

export default MainRoute