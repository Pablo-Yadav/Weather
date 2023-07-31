import { useParams } from "react-router-dom"
import {useEffect,useState} from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import '../../src/App.css'
import Typography from '@mui/material/Typography';

export default function WeatherReport(){
    const [details,setDetails] = useState("")
    const params = useParams();
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${params.cityName}&appid=fe4feefa8543e06d4f3c66d92c61b69c`

    useEffect(() => {
        axios.get(baseURL)
        .then(res => {
            console.log("response",res.data)
            setDetails(res.data)
        })
        .catch(err => console.log("error", err))
    },[params])

    let temp = Math.ceil(details?.main?.temp - 273);
    temp += '°C';

    return (

        <Box style={{
            width: '60%',
            padding: '20px',
            border: '1px solid grey',
            borderRadius: '4px',
            borderShadow : '2px',
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'space-evenly',
            alignItems : 'center',
            gap: '30px'
            }} >
            
            <Typography variant='h4'>
                React Weather App
            </Typography>

            <Box 
                style={{
                    width: '100%',
                    border: '0.5px solid purple',
                    backgroundColor: 'ButtonShadow',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '20px',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}>
                
                <Typography variant='h5'>
                    {temp}&nbsp;|&nbsp;Overcast Clouds
                </Typography>

                <Box component="img" alt='Clouds'
                src="https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                style={{
                    width: '100px',
                    height: '100px'
                }} />

            </Box>

            <Box style = {{
                textAlign: 'center',
                width: ' 100%'
            }}>
                <Typography variant="h5">
                    {details?.name},{details?.sys?.country}
                </Typography>
                
            </Box>

        </Box>
    )
}