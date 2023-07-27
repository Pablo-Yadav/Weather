import React from 'react'
import { useLocation } from 'react-router-dom';
function Weather() {
    const location = useLocation();
    console.log("In Weather location ",location.state);
  return (
    <div>
      <h1>Weather</h1>
      <h1>{location.state.name},{location.state.sys.country}</h1>
    </div>
  )
}

export default Weather
