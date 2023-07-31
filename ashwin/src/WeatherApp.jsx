import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function WeatherApp() {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState();
  const [suggestcities, setSuggestCities] = React.useState([]);
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
    "West Delhi",
  ];

  function handleChange(e) {
    let search = e.target.value;
    let temp = [];
    if (search.length != 0) {
      for (let i = 0; i < cities.length; i++) {
        if (
          cities[i].slice(0, search.length).toLowerCase() ===
          search.toLowerCase()
        )
          temp.push(cities[i]);
      }
    }
    setSuggestCities(temp);
    setSearch(search);
    console.log(temp);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter the city"
        value={search}
        onChange={(e) => handleChange(e)}
        style={{ width: "20vw", fontSize: "20px", marginRight: "10px" }}
      />
      <button
        style={{ width: "5vw", fontSize: "20px" }}
        onClick={() => {navigate(`/city/${search}`)}}
      >
        Search
      </button>
      {suggestcities.map((item, idx) => {
        return (
          <div
            onClick={() => {
              setSearch(suggestcities[idx]), setSuggestCities([]);
            }}
            style={{
              backgroundColor: "lightblue",
              width: "20vw",
              border: "0.5px solid black",
              fontSize: "20px",
            }}
          >
            {suggestcities[idx]}
          </div>
        );
      })}
    </>
  );
}
