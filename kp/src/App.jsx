import { useState } from 'react'
import {Route,Routes,NavLink,BrowserRouter,Router} from 'react-router-dom'

import Interface from './Components/interface'
import WeatherReport from './Components/returnPage'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function Home(){
  return (
    <h1> Welcome to Home Page </h1>
  )
}

function App() {
  

  return (
    <>
    
    <Box 
    style={{
      width: '300px',
      fontSize: '25px',
      backgroundColor: 'skyblue' ,
      borderRadius: '5px',
      border: '1px solid grey',
      margin: '25px'
      }}>
    <ul>
      <li>
        <NavLink to='/home'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/city'>
          Which city?
        </NavLink>
      </li>
    </ul>
    </Box>
    
    
    
      <Routes>
      
        <Route path='/home' element={<Home />} />
        <Route path='/city' element={<Interface/>} />
        <Route path='/city/:cityName' element={<WeatherReport />} />
      </Routes>

      
      
    </>

  )
}

export default App
