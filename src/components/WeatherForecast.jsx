import React from "react";
import sL from "../style/weatherCard.module.css";
import sD from "../style/weatherCardDark.module.css";
import getStringFromDate from "./../utils/getStringFromDate";
import { useApp } from "../utils/context";

export default function WeatherForecast(props) {
  const { updateWeatherIndex } = useApp();
  const fDay = props.weatherState?.forecast?.forecastday.slice(1, 6);

  const { isDarkMode } = useApp();
  const s = isDarkMode ? sD : sL;

  if (!fDay) {
    return <div>Loading...</div>;
  }

  function onCurrentForecastClick(e) {
    updateWeatherIndex(e.currentTarget.id);
  }
  let weatherIndex = 0;
  return (
    <div className={s.cardForecast}>
      <h2>5 Days Forecast</h2>
      {fDay?.map((item) => {
        const day = item?.day;
        const date = new Date(Date.parse(item.date));
        weatherIndex += 1;
        return (
          <div
            className={s.box_forecast}
            id={weatherIndex}
            onClick={onCurrentForecastClick}
          >
            <img src={day.condition.icon} alt="Condition" />
            <p className={s.text_fcTemp}>{day.avgtemp_c}°C</p>
            <p className={s.text_fc_date}>{getStringFromDate(date)}</p>
          </div>
        );
      })}
    </div>
  );
}
