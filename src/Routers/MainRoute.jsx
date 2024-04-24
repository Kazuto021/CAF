import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Banner from '../Screens/Banner'
import App from '../App'
const MainRoute = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='' Component={App}/>
    </Routes>
    </BrowserRouter>
  )
}

export default MainRoute