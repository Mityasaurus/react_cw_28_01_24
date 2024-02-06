import { API_PROFILE_WEATHER } from "./api_profile_weather";

export let weatherData;
export default async function getData(objValue) {
  const searchValue = "auto:ip";

  try {
    const responce = await fetch(
      `${API_PROFILE_WEATHER.apiUrl}${API_PROFILE_WEATHER.path}?key=${API_PROFILE_WEATHER.apiKey}&q=${searchValue}&aqi=yes`
    );
    const data = await responce.json();
    weatherData = data;
    return weatherData;
  } catch (error) {
    console.error(error);
  }
}
