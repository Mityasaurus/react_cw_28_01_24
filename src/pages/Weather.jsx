import React, { useEffect, useState } from "react";
import getData from "../utils/getWeatherData";
import WeatherCard from "../components/WeatherCard"

export default function Weather() {
  const [weatherData, setWeatherData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await getData();
      setWeatherData(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <WeatherCard weatherData={weatherData}/>
    </div>
  );
}
