import React from 'react'
import ReactDOM from 'react-dom/client'
import WeatherApp from './WeatherApp'
import Display from './Display'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherApp />}/>
        <Route path="/city/:cityname" element={<Display />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
