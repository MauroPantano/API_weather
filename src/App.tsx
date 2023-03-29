import React, { useState } from "react";
import axios from "axios";

function App() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);

  const API_KEY = "34466fac5608e964b87f65e4219b2a32";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Get Weather</button>
      {weatherData && (
        <div>
          <p>City: {weatherData.name}</p>
          <p>Temperature: {weatherData.main.temp}°F</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
