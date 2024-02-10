import React from "react";
import s from "../style/weatherCard.module.css";
import getStringFromDate from "./../utils/getStringFromDate";
import sunriseImage from "../assets/img/sunrise.png";
import sunsetImage from "../assets/img/sunset.png";
import humidityImage from "../assets/img/humidity.png";
import windImage from "../assets/img/wind.png";
import pressureImage from "../assets/img/pressure.png";
import UVImage from "../assets/img/UV.png";

const WeatherCard = (props) => {
  const location = props.weatherData?.location;
  const current = props.weatherData?.current;
  const astro = props.weatherData?.forecast?.forecastday[0].astro;
  const fDay = props.weatherData?.forecast?.forecastday.slice(1, 6);
  const dayHours = props.weatherData?.forecast?.forecastday[0]?.hour;

  if (!location || !current || !astro || !fDay || !dayHours) {
    return <div>Loading...</div>;
  }

  const date = new Date(Date.parse(location.localtime));
  let hourCounter = 9;

  return (
    <div className={s.weatherCard}>
      <div className={s.weatherCardPart}>
        <div className={s.cardDatetime}>
          <p className={s.text_city}>{location.name}</p>
          <p className={s.text_time}>{location.localtime.slice(11, 16)}</p>
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
              if (new Date(Date.parse(hour.time)).getHours() === hourCounter) {
                hourCounter += 3;
                const color_class =
                  hour.is_day === 1 ? s.hour_day : s.hour_night;
                return (
                  <div className={`${s.box_hour} ${color_class}`}>
                    <p></p>
                    <img src="" alt="Condition" />
                    <p></p>
                    <img src="" alt="Wind direction" />
                    <p></p>
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
};

export default WeatherCard;
