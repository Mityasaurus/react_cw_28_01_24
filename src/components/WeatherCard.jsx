import React from "react";
import s from "../style/weatherCard.module.css";

const WeatherCard = (props) => {
  const location = props.weatherData?.location;
  const current = props.weatherData?.current;

  if (!location || !current) {
    return <div>Loading...</div>;
  }

  return (
    <div className={s.weatherCard}>
      <img
        className={s.weatherIcon}
        src={current.condition.icon}
        alt="Weather Icon"
      />
      <p className={s.weatherInfo}>
        {location.name}, {location.country}
      </p>
      <h2 className={s.weatherTemperature}>{current.temp_c}°C</h2>
      <p className={s.weatherCondition}>{current.condition.text}</p>
      <div className={s.weatherDetails}>
        <p>Feels like: {current.feelslike_c}°C</p>
        <p>Wind speed: {current.wind_kph} km/h</p>
        <p>Humidity: {current.humidity}%</p>
        <p>Air Quality Index: {current.air_quality["gb-defra-index"]}</p>
      </div>
    </div>
  );
}

export default WeatherCard;
