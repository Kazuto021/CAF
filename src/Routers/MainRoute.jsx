import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Banner from '../Screens/Banner'
const MainRoute = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='' Component={Banner}/>
    </Routes>
    </BrowserRouter>
  )
}

export default MainRoute