import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import PageNotFound from './Components/PageNotFound';
import Home from './Components/Home';
import Weather from './Components/Weather';
function App() {

  return (
    <BrowserRouter>

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/weather" element={<Weather/>}></Route>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
