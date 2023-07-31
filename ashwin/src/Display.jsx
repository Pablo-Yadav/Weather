import axios from "axios";
import * as React from "react";
import { useParams } from 'react-router-dom';

export default function Display()
{
    let {cityname} = useParams();
    cityname = cityname.toLowerCase();
    const [post, setPost] = React.useState(null);
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=fe4feefa8543e06d4f3c66d92c61b69c`;
    console.log(baseURL);
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
          console.log(response.data);
        });
      }, []);
    
    return (
        <>
        <h1>{cityname}</h1>
        <h2>{post?.name}</h2>
        <h3>{post?.weather[0]?.description}</h3>
        <h4>{post?.main?.temp}</h4>
        </>
    )
}