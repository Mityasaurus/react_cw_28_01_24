import React, { useEffect, useState } from "react";
import { useApp } from "../utils/context";
import s from "../style/weatherCard.module.css";
import WeatherDate from "../components/WeatherDate";
import WeatherDetails from "../components/WeatherDetails";
import WeatherForecast from "../components/WeatherForecast";
import WeatherHourlyForecast from "../components/WeatherHourlyForecast";
import locationImg from "../assets/img/location.png";

export default function Weather() {
  const { get_weather_data, weatherState } = useApp();
  const [inputValue, setInputValue] = useState("");

  const fetchData = async (searchValue) => {
    try {
      if (!searchValue) {
        searchValue = inputValue;
      }
      await get_weather_data(searchValue);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  function onInputChange(e) {
    setInputValue(e.target.value);
  }

  function onSearchFormSubmit(e) {
    e.preventDefault();
    fetchData();
  }

  function onBtnCurrLocationClick(e) {
    setInputValue("");
    fetchData("auto:ip");
  }

  if (!weatherState) {
    return <div>Loading...</div>;
  }

  return (
    <div className={s.weatherCard}>
      <div className={s.weatherCardPart}>
        <form onSubmit={onSearchFormSubmit}>
          <input
            type="text"
            placeholder="Search for your preffered city..."
            value={inputValue}
            onChange={onInputChange}
          />
        </form>
        <button
          type="button"
          onClick={onBtnCurrLocationClick}
          className={s.btn_location}
        >
          <img src={locationImg} alt="Location" />
          <p>Current Location</p>
        </button>
      </div>
      <div className={s.weatherCardPart}>
        <WeatherDate weatherState={weatherState} />
        <WeatherDetails weatherState={weatherState} />
      </div>
      <div className={s.weatherCardPart}>
        <WeatherForecast weatherState={weatherState} />
        <WeatherHourlyForecast weatherState={weatherState} />
      </div>
    </div>
  );
}
