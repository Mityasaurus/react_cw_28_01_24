import React from "react";
import s from "../style/weatherCard.module.css";
import getShortTimeString from "./../utils/getShortTimeStringFromDate";
import nImg from "../assets/img/wind/n.png";
import nneImg from "../assets/img/wind/nne.png";
import neImg from "../assets/img/wind/ne.png";
import eneImg from "../assets/img/wind/ene.png";
import eImg from "../assets/img/wind/e.png";
import eseImg from "../assets/img/wind/ese.png";
import seImg from "../assets/img/wind/se.png";
import sseImg from "../assets/img/wind/sse.png";
import sImg from "../assets/img/wind/s.png";
import sswImg from "../assets/img/wind/ssw.png";
import swImg from "../assets/img/wind/sw.png";
import wswImg from "../assets/img/wind/wsw.png";
import wImg from "../assets/img/wind/w.png";
import wnwImg from "../assets/img/wind/wnw.png";
import nnwImg from "../assets/img/wind/nnw.png";
import nwImg from "../assets/img/wind/nw.png";

export default function WeatherHourlyForecast(props) {
  const dayHours = props.weatherState?.forecast?.forecastday[0]?.hour;
  if (!dayHours) {
    return <div>Loading...</div>;
  }
  let hourCounter = 9;
  const windDirections = {
    N: nImg,
    NNE: nneImg,
    NE: neImg,
    ENE: eneImg,
    E: eImg,
    ESE: eseImg,
    SE: seImg,
    SSE: sseImg,
    S: sImg,
    SSW: sswImg,
    SW: swImg,
    WSW: wswImg,
    W: wImg,
    WNW: wnwImg,
    NNW: nnwImg,
    NW: nwImg,
  };
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
                <img src={windDirections[hour.wind_dir]} alt="Wind direction" />
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
