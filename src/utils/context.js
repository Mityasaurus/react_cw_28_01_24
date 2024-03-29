import { createContext, useContext, useEffect, useState } from "react";
import { API_PROFILE_NEWS } from "./api_profile_news";
import { API_PROFILE_WEATHER } from "./api_profile_weather";
import getShortTimeStringFromDate from "./getShortTimeStringFromDate";

// створення контексту
const AppContext = createContext();

// функція для отримання даних з контексту
export const useApp = () => {
  return useContext(AppContext);
};

// створення провайдера
export const AppProvider = ({ children }) => {
  // news
  const [globalState, setGlobalState] = useState([]);
  const [weatherIndex, setWeatherIndex] = useState(0);
  const [isDarkMode, setDarkMode] = useState(false);
  const get_news_data = async (...obj) => {
    const searchValue = obj[0] || "crypto";
    try {
      const responce = await fetch(
        `${API_PROFILE_NEWS.apiUrl}${API_PROFILE_NEWS.newsPath}?q=${searchValue}&${API_PROFILE_NEWS.apiKey}`
      );
      const data = await responce.json();
      setGlobalState(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  // weather
  const [weatherState, setWeatherState] = useState([]);
  const get_weather_data = async (...obj) => {
    const searchValue = obj[0] || "Kyiv";
    try {
      const responce = await fetch(
        `${API_PROFILE_WEATHER.apiUrl}${API_PROFILE_WEATHER.path}?key=${API_PROFILE_WEATHER.apiKey}&q=${searchValue}&aqi=${API_PROFILE_WEATHER.aqi}&days=${API_PROFILE_WEATHER.days}`
      );
      const data = await responce.json();
      setWeatherState(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  function updateWeatherIndex(index) {
    setWeatherIndex(index);
  }
  function toggleTheme() {
    setDarkMode(!isDarkMode);
  }
  const localtime = getShortTimeStringFromDate(new Date());

  useEffect(() => {
    localtime > "20:00" ? setDarkMode(true) : setDarkMode(false);
  }, []);
  return (
    <AppContext.Provider
      value={{
        get_news_data,
        globalState,
        get_weather_data,
        weatherState,
        weatherIndex,
        updateWeatherIndex,
        isDarkMode,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
