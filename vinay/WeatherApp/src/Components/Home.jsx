import React from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import WeatherLogo from './WeatherLogo.svg';
import iteams from './cities';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import '../App.css'
function Home() {
    const [city,setCity]=useState('');
    const [suggestions,setSuggestions]=useState([]);
    const navigate=useNavigate();

    const handleSearch= ()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
        ).then((res)=>{
            setTimeout(()=>{
                navigate('/weather',{state: res.data});
            },1000);
        });
        
    }
    const  handleChange=(e)=>{
        setCity(e.target.value);
    }
    useEffect(()=>{
        let newSuggestions=[];
        if(city.length>0){
            newSuggestions=iteams.find(city);
            console.log(newSuggestions);
        }
        setSuggestions(newSuggestions);
    },[city]);
    console.log("new suggestions ",suggestions);
  return (
    <div className='clouds-container'>
        <div className='container'>
        <h1>React Weather App</h1>
            {/* <img src={WeatherLogo}></img> */}
            <h1>Find Weather of your city</h1>
            <div className='search-bar'>
                <TextField
                    required
                    id="outlined-required"
                    label="city"
                    style={{width: "50vw",border: "2px solid white", color: "white"}}
                    value={city}
                    onChange={handleChange}
                />
                <Button onClick={handleSearch}>Search</Button>
            </div>
        </div>
        {
            suggestions.map((temp,i)=>{
                return (
                    <div key={i}>
                        {temp}
                     </div>   
                )
            })
        }
    </div>
  )
}

export default Home
