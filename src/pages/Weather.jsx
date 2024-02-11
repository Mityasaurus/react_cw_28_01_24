import React, { useEffect, useState } from "react";
import { useApp } from "../utils/context";
import s from "../style/weatherCard.module.css";
import getStringFromDate from "./../utils/getStringFromDate";
import sunriseImage from "../assets/img/sunrise.png";
import sunsetImage from "../assets/img/sunset.png";
import humidityImage from "../assets/img/humidity.png";
import windImage from "../assets/img/wind.png";
import pressureImage from "../assets/img/pressure.png";
import UVImage from "../assets/img/UV.png";
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

export default function Weather() {
  const { get_weather_data, weatherState } = useApp();
  const [inputValue, setInputValue] = useState("");

  const fetchData = async () => {
    try {
      await get_weather_data(inputValue);
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

  const location = weatherState?.location;
  const current = weatherState?.current;
  const astro = weatherState?.forecast?.forecastday[0].astro;
  const fDay = weatherState?.forecast?.forecastday.slice(1, 6);
  const dayHours = weatherState?.forecast?.forecastday[0]?.hour;

  if (!location || !current || !astro || !fDay || !dayHours) {
    return <div>Loading...</div>;
  }

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

  const date = new Date(Date.parse(location.localtime));
  let hourCounter = 9;

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
      </div>
      <div className={s.weatherCardPart}>
        <div className={s.cardDatetime}>
          <p className={s.text_city}>{location.name}</p>
          <p className={s.text_time}>{getShortTimeString(date)}</p>
          <p className={s.text_date}>{getStringFromDate(date)}</p>
        </div>
        <div className={s.cardDetails}>
          <div className={s.detailsTemp}>
            <p className={s.tempC}>{current.temp_c}°C</p>
            <p className={s.feelsLike}>
              Feels like: <span>{current.feelslike_c}°C</span>
            </p>
            <div className={s.boxSuntime}>
              <img src={sunriseImage} alt="sunrise" />
              <article>
                <p className={s.text_sunTitle}>Sunrise</p>
                <p className={s.text_suntime}>{astro.sunrise}</p>
              </article>
            </div>
            <div className={s.boxSuntime}>
              <img src={sunsetImage} alt="sunset" />
              <article>
                <p className={s.text_sunTitle}>Sunset</p>
                <p className={s.text_suntime}>{astro.sunset}</p>
              </article>
            </div>
          </div>
          <div className={s.detailsCondition}>
            <img src={current.condition.icon} alt="Condition" />
            <p className={s.text_condition}>{current.condition.text}</p>
          </div>
          <div className={s.detailsInfo}>
            <div className={s.infoPart}>
              <img src={humidityImage} alt="Humidity" />
              <p className={s.text_infoData}>{current.humidity}%</p>
              <p className={s.text_infoName}>Humidity</p>
            </div>
            <div className={s.infoPart}>
              <img src={windImage} alt="Wind" />
              <p className={s.text_infoData}>{current.wind_kph}km/h</p>
              <p className={s.text_infoName}>Wind speed</p>
            </div>
            <div className={s.infoPart}>
              <img src={pressureImage} alt="Pressure" />
              <p className={s.text_infoData}>{current.pressure_mb}hPa</p>
              <p className={s.text_infoName}>Pressure</p>
            </div>
            <div className={s.infoPart}>
              <img src={UVImage} alt="UV" />
              <p className={s.text_infoData}>{current.uv}</p>
              <p className={s.text_infoName}>UV</p>
            </div>
          </div>
        </div>
      </div>
      <div className={s.weatherCardPart}>
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
        <div className={s.cardHourlyForecast}>
          <h2>Hourly Forecast</h2>
          <div className={s.container_hours}>
            {dayHours.map((hour) => {
              const date = new Date(Date.parse(hour.time));
              if (date.getHours() === hourCounter) {
                hourCounter += 3;
                const color_class =
                  hour.is_day === 1 ? s.hour_day : s.hour_night;
                return (
                  <div className={`${s.box_hour} ${color_class}`}>
                    <p>{getShortTimeString(date)}</p>
                    <img src={hour.condition.icon} alt="Condition" />
                    <p>{hour.temp_c}°C</p>
                    <img
                      src={windDirections[hour.wind_dir]}
                      alt="Wind direction"
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
      </div>
    </div>
  );
}
