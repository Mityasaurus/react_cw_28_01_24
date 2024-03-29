import React from "react";
import sL from "../style/weatherCard.module.css";
import sD from "../style/weatherCardDark.module.css";
import getShortTimeString from "../utils/getShortTimeStringFromDate";
import getStringFromDate from "../utils/getStringFromDate";
import { useApp } from "../utils/context";

export default function WeatherDate(props) {
  const location = props.weatherState?.location;
  const { isDarkMode } = useApp();
  const s = isDarkMode ? sD : sL;
  if (!location) {
    return <div>Loading...</div>;
  }

  
  const date = new Date(Date.parse(location.localtime));

  return (
    <div className={s.cardDatetime}>
      <p className={s.text_city}>{location.name}</p>
      <p className={s.text_time}>{getShortTimeString(date)}</p>
      <p className={s.text_date}>{getStringFromDate(date)}</p>
    </div>
  );
}
