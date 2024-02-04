import { createContext, useContext, useState } from "react";
import { API_PROFILE } from "./api_profile_news";

// створення контексту
const AppContext = createContext();

// функція для отримання даних з контексту
export const useApp = () => {
  return useContext(AppContext);
};

// створення провайдера
export const AppProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState([]);
  const get_news_data = async (...obj) => {
    const searchValue = obj[0] || "crypto";
    try {
      const responce = await fetch(
        `${API_PROFILE.apiUrl}${API_PROFILE.newsPath}?q=${searchValue}&${API_PROFILE.apiKey}`
      );
      const data = await responce.json();
      setGlobalState(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  return <AppContext.Provider value={{get_news_data, globalState}}>{children}</AppContext.Provider>;
};
