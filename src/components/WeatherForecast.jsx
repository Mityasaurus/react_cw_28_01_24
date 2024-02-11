import React from "react";
import s from "../style/weatherCard.module.css";
import getStringFromDate from "./../utils/getStringFromDate";

export default function WeatherForecast(props) {
  const fDay = props.weatherState?.forecast?.forecastday.slice(1, 6);

  if (!fDay) {
    return <div>Loading...</div>;
  }
  return (
    <div className={s.cardForecast}>
      <h2>5 Days Forecast</h2>
      {fDay?.map((item) => {
        const day = item?.day;
        const date = new Date(Date.parse(item.date));
        return (
          <div className={s.box_forecast}>
            <img src={day.condition.icon} alt="Condition" />
            <p className={s.text_fcTemp}>{day.avgtemp_c}°C</p>
            <p className={s.text_fc_date}>{getStringFromDate(date)}</p>
          </div>
        );
      })}
    </div>
  );
}
