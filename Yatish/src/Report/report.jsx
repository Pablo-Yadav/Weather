import {useEffect,useState} from 'react'
import { useParams} from 'react-router-dom'
import axios from "axios"

const weatherIcons = {
    "01d": "/react-weather-app/icons/sunny.svg",
    "01n": "/react-weather-app/icons/night.svg",
    "02d": "/react-weather-app/icons/day.svg",
    "02n": "/react-weather-app/icons/cloudy-night.svg",
    "03d": "/react-weather-app/icons/cloudy.svg",
    "03n": "/react-weather-app/icons/cloudy.svg",
    "04d": "/react-weather-app/icons/perfect-day.svg",
    "04n": "/react-weather-app/icons/cloudy-night.svg",
    "09d": "/react-weather-app/icons/rain.svg",
    "09n": "/react-weather-app/icons/rain-night.svg",
    "10d": "/react-weather-app/icons/rain.svg",
    "10n": "/react-weather-app/icons/rain-night.svg",
    "11d": "/react-weather-app/icons/storm.svg",
    "11n": "/react-weather-app/icons/storm.svg",
  };
const weatherInfoIcons = {
    sunset: "/react-weather-app/icons/temp.svg",
    sunrise: "/react-weather-app/icons/temp.svg",
    humidity: "/react-weather-app/icons/humidity.svg",
    wind: "/react-weather-app/icons/wind.svg",
    pressure: "/react-weather-app/icons/pressure.svg",
};
export default function Report(){
    let [data,setData]=useState({});
    let {cityname}=useParams();
    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname.toLowerCase()}&appid=fe4feefa8543e06d4f3c66d92c61b69c`)
        .then(response=>{
            console.log("data is ", response.data);
            setData(response.data);
        })
    }, []
    )
    if(data?.main){
        let temp=data?.main?.temp-273;
        temp=temp?Math.round(temp * 100) / 100:0;
        let icon= data?.weather[0]?weatherIcons[data?.weather[0].icon]:undefined;
        let name=data.name;
        let country=data?.sys.country;
        const isDay = data?.weather[0].icon?.includes('d');
        let sun=isDay?"sunrise":"sunset";
        const getTime = (timeStamp) => {
            return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
        }
        let humidity=data?.main.humidity;
        let pressure=data?.main.pressure;
        let wind=data?.wind.speed;
        
        return(
    
            <div style={{padding:"10px",display:"flex",flexDirection:"column",gap:"0.5em"}}>
                <div style={{display:"flex",gap:"3em"}} >
                    <div style={{display:"flex",alignItems:"center"}}>
                  <span style={{fontSize:"25px"}}>{temp?temp:""}°C<span style={{fontSize:"17px"}}> {`| ${data?.weather[0].description?data?.weather[0].description:""}`}</span></span>
    
                    </div>
    
                  
                  <img style={{width:"100px",height:"100px"}}src={`https://ayushkul.github.io${icon?icon:""}`}/>
                </div>
                <div style={{textAlign:"center"}}>
                 <h1>{name},{country}</h1>
                </div>
                <div>
                <p>Weather Info</p>
                <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gridTemplateRows:"auto auto"}}>
                     <div style={{display:"flex",gap:"0.5em",justifyContent:"center"}}>
                        <img src={`https://ayushkul.github.io${weatherInfoIcons[sun]}`}/>
                        <div>
                         <p style={{margin:"0",color:"#8f8e8d"}}>{getTime(data.sys?.[sun])}</p>
                         <p style={{margin:"0",color:"#8f8e8d"}}>{sun}</p>
                        </div>
                     </div>
    
                     <div style={{display:"flex",gap:"0.5em",justifyContent:"center"}}>
                        <img src={`https://ayushkul.github.io${weatherInfoIcons["humidity"]}`}/>
                        <div>
                         <p style={{margin:"0",color:"#8f8e8d"}}>{humidity}</p>
                         <p style={{margin:"0",color:"#8f8e8d"}}>{"humidity"}</p>
                        </div>
                     </div>
    
    
                     <div style={{display:"flex",gap:"0.5em",justifyContent:"center"}}>
                        <img src={`https://ayushkul.github.io${weatherInfoIcons["wind"]}`}/>
                        <div>
                         <p style={{margin:"0",color:"#8f8e8d"}}>{wind}</p>
                         <p style={{margin:"0",color:"#8f8e8d"}}>{"wind"}</p>
                        </div>
                     </div>
    
    
                     <div style={{display:"flex",gap:"0.5em",justifyContent:"center"}}>
                        <img src={`https://ayushkul.github.io${weatherInfoIcons["pressure"]}`}/>
                        <div>
                         <p style={{margin:"0",color:"#8f8e8d"}}>{pressure}</p>
                         <p style={{margin:"0",color:"#8f8e8d"}}>{"pressure"}</p>
                        </div>
                     </div>
    
                </div>
    
                </div>
    
             
            </div>
        );
    }else{
        return<></>
    }
    
}