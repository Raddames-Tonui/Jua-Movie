import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './movie/Home';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='movie/:movietitle'/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App