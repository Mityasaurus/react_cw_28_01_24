import React from "react";
import sL from "../style/weatherCard.module.css";
import sD from "../style/weatherCardDark.module.css";
import getShortTimeString from "./../utils/getShortTimeStringFromDate";
import windDirImg from "../assets/img/wind/n.png";
import { useApp } from "../utils/context";

export default function WeatherHourlyForecast(props) {
  const { weatherIndex, isDarkMode } = useApp();
  const dayHours = props.weatherState?.forecast?.forecastday[weatherIndex]?.hour;
  const s = isDarkMode ? sD : sL;
  if (!dayHours) {
    return <div>Loading...</div>;
  }
  let hourCounter = 9;
  return (
    <div className={s.cardHourlyForecast}>
      <h2>Hourly Forecast</h2>
      <div className={s.container_hours}>
        {dayHours.map((hour) => {
          const date = new Date(Date.parse(hour.time));
          if (date.getHours() === hourCounter) {
            hourCounter += 3;
            const color_class = hour.is_day === 1 ? s.hour_day : s.hour_night;
            return (
              <div className={`${s.box_hour} ${color_class}`}>
                <p>{getShortTimeString(date)}</p>
                <img src={hour.condition.icon} alt="Condition" />
                <p>{hour.temp_c}°C</p>
                <img
                  src={windDirImg}
                  alt="Wind direction"
                  style={{ rotate: `${hour.wind_degree}deg` }}
                />
                <p>{hour.wind_kph}km/h</p>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
