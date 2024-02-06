import React, { useEffect } from "react";
import WeatherCard from "../components/WeatherCard"
import { useApp } from "../utils/context";

export default function Weather() {
  const {get_weather_data, weatherState} = useApp();

  const fetchData = async () => {
    try {
      await get_weather_data();
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <WeatherCard weatherData={weatherState}/>
    </div>
  );
}
