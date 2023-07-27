import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter ,Route,Routes,Link,useNavigate } from "react-router-dom";
import Home from './Home/home';
import Report from './Report/report';

function App() {
    let [cityHere,setCityHere]=useState("");
    let [data,setData]=useState({});
   function handleCityChange(city,data){
        setCityHere(city);
        setData=data;
   }
    
    return(
      <div style={{
        border:"1px solid #dae0db",
        boxShadow:"0 0 15px -2px #444444",
        padding:"30px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        backgroundColor:"white"
      
      }}>
       <h2> React Weather App</h2>
       <Routes>
        <Route path="/" element={<Home
           handleCityChange={handleCityChange}
        />}/>
        <Route path="/city/:cityname" element={<Report/>}/>
       </Routes>

      </div>
    );
}

export default App
