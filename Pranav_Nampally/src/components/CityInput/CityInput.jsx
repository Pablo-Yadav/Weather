import "./CityInput.css";
import React, { useState } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";

const CityInput = (props) => {
  const [suggestions, setSuggestions] = useState([]);
  // const [text, setText] = useState("");
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const [searcParams, setSearchParams] = useSearchParams();
  // console.log(props.items);
  const onTextChange = (e) => {
    // const { iteams } = props;
    let suggestions = [];
    const value = "" + e.target.value;
    setValue(value);
    if (value.length > 0) {
      // const regex = new RegExp(`^${value}`, `i`);
      // suggestions = iteams.sort().filter((v) => regex.test(v));
      suggestions = props.items.find(value);
    }

    setSuggestions(suggestions);
  };

  const RenderSuggestions = (props) => {
    const { suggestions } = props;
    if (suggestions.length === 0) {
      return null;
    } else
      return (
        <ul>
          {suggestions.map((city) => (
            <li key={city} onClick={(e) => setValue(city)}>
              {city}
            </li>
          ))}
        </ul>
      );
  };

  function handleCity() {
    // console.log(value)
    let city = value;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
      )
      .then((res) => {
        console.log(res.data);
      });
  }

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          width: "30vw",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="TypeAheadDropDown">
          <input
            onChange={onTextChange}
            placeholder="Search city name"
            value={value}
            type="text"
          />
        </div>
        <button
          className="btn"
          onClick={() => {
            // navigate(`/city`, { state: value });
            // setSearchParams({ city: value });
            navigate(`/city/${value}`);
          }}
        >
          Search
        </button>
      </div>
      <div className="TypeAheadDropDownNew">
        <RenderSuggestions suggestions={suggestions} />
      </div>
    </div>
  );
};

export default CityInput;
