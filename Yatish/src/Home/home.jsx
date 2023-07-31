import { useState, useEffect } from 'react'
import { BrowserRouter ,Route,Routes,Link,useNavigate } from "react-router-dom";



const cities = [
    "Agra",
    "Allahabad",
    "Aligarh",
    "Ambedkar Nagar",
    "Auraiya",
    "Azamgarh",
    "Barabanki",
    "Bijnor",
    "Ballia",
    "Banda",
    "Nagar",
    "Etawah",
    "Firozabad",
    "Farrukhabad",
    "Fatehpur",
    "Faizabad",
    "Gautam Buddh Nagar",
    "Gonda",
    "Ghazipur",
    "Gorakhpur",
    "Ghaziabad",
    "Hamirpur",
    "Hardoi",
    "Mahamaya Nagar",
    "Jhansi",
    "Jalaun",
    "Jyotiba Phule Nagar",
    "Jaunpur district",
    "Ramabai Nagar (Kanpur Dehat)",
    "Kannauj",
    "Kanpur",
    "Kaushambi",
    "Kushinagar",
    "Raebareli",
    "Saharanpur",
    "Sitapur",
    "Shahjahanpur",
    "Sant Kabir Nagar",
    "Siddharthnagar",
    "Sonbhadra",
    "Sant Ravidas Nagar",
    "Sultanpur",
    "Shravasti",
    "Unnao",
    "Varanasi",
    "Srikakulam",
    "Nellore",
    "Visakhapatnam",
    "Vizianagaram",
    "Warangal",
    "Eluru",
    "Kadapa",
    "Anjaw",
    "Changlang",
    "East Siang",
    "Kurung Kumey",
    "Lohit",
    "Lower Dibang Valley",
    "Lower Subansiri",
    "Papum Pare",
    "Tawang",
    "Tirap",
    "Dibang Valley",
    "Upper Siang",
    "Upper Subansiri",
    "West Kameng",
    "Udalguri",
    "Araria",
    "Arwal",
    "Aurangabad",
    "Banka",
    "Begusarai",
    "Bhagalpur",
    "Saharsa",
    "Samastipur",
    "Saran",
    "Sheikhpura",
    "Sheohar",
    "Sitamarhi",
    "Siwan",
    "Supaul",
    "Vaishali",
    "West Champaran",
    "Chandigarh",
    "Bastar",
    "Bijapur",
    "Bilaspur",
    "Dantewada",
    "Dhamtari",
    "Durg",
    "Jashpur",
    "Janjgir-Champa",
    "Korba",
    "Koriya",
    "Kanker",
    "Kabirdham (Kawardha)",
    "Mahasamund",
    "Narayanpur",
    "Raigarh",
    "North Delhi",
    "North East Delhi",
    "North West Delhi",
    "South Delhi",
    "South West Delhi",
    "West Delhi"
  ];
  
export default function Home(props){

    let [city,setCity]=useState("");
    let navigate=useNavigate();
    let [suggestions,setSuggestions]=useState([]);
    
    function handleSuggestClick(id){
        setCity(suggestions[id]);
        setSuggestions([]);
    }

    function handleChange(e){
        if(e.target.value==="" && city.length===1){
            setSuggestions([]);
            setCity("");
            return;
        }
        let str=city;
       str=e.target.value;
        let newArray1=[...cities];
        for(let i=0;i<str.length;i++){
            let arr=[];
           for(let j=0;j<newArray1.length;j++){
            let str1=newArray1[j].toLowerCase();
            let str2=str.toLowerCase();
            if(str1[i]===str2[i]){
                arr.push(newArray1[j]);
            }
           }
           newArray1=[...arr];
        }
        setSuggestions(newArray1);
        setCity(e.target.value);
    }

    async function handleSubmitClick(){
     navigate(`/city/${city}`);
    }
    
    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            gap:"1em",
            alignItems:"center"
        }}>
            <div style={{display:"flex"}}>
        <img style={{width:"150px",height:"150px"}} src="https://ayushkul.github.io/react-weather-app/icons/perfect-day.svg" />
            </div>
            <p>Find Weather of your city</p>
            <form style={{
                border:"1px solid black"
            }}>
                <input type="text" placeholder="City" value={city}
                style={{
                    padding:"10px",
                    fontSize:"16px",
                    border:"none",
                    outline:"none",
                    fontWeight:"bold"
                }}
                onChange={(e)=>{handleChange(e);}}
                />
                <button type="submit"
                
                style={{
                    backgroundColor: "black",
                    fontSize: "16px",
                    padding: "10px",
                    color: "white",
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                   
                }}
               onClick={handleSubmitClick}
                > Submit</button>
            </form>
            <div style={{width:"100%",height:"40px",overflow:"scroll"}}>
            {suggestions.map((item,id)=>{
                return(<div key={id} style={{cursor:"pointer"}} onClick={()=>{handleSuggestClick(id);}} > {item} </div>);
            })}
            </div>
            
        </div>

    );
}