import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Banner from '../Screens/Banner'
import App from '../App'
import Home from '../Screens/Home'

const MainRoute = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='' Component={App}/>
        <Route path='/special' Component={Home}/>
    </Routes>
    </BrowserRouter>
  )
}

export default MainRoute