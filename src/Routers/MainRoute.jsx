import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import App from '../App'
import Home from '../Screens/Home'
import Special from '../Screens/Special'
import Terms from '../Screens/Terms'

const MainRoute = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='' Component={Home}/>
        <Route path='/banner' Component={App}/>
        <Route path='/special' Component={Special}/>
        <Route path='/tandc' Component={Terms}/>

    </Routes>
    </BrowserRouter>
  )
}

export default MainRoute