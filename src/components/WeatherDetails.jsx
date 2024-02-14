import React from "react";
import sL from "../style/weatherCard.module.css";
import sD from "../style/weatherCardDark.module.css";
import sunriseImage from "../assets/img/sunrise.png";
import sunsetImage from "../assets/img/sunset.png";
import humidityImage from "../assets/img/humidity.png";
import windImage from "../assets/img/wind.png";
import pressureImage from "../assets/img/pressure.png";
import UVImage from "../assets/img/UV.png";
import { useApp } from "../utils/context";

export default function WeatherDetails(props) {
  const current = props.weatherState?.current;
  const astro = props.weatherState?.forecast?.forecastday[0].astro;
  const { isDarkMode } = useApp();
  const s = isDarkMode ? sD : sL;
  if (!current || !astro) {
    return <div>Loading...</div>;
  }

  return (
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
  );
}
