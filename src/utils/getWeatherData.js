import { API_PROFILE } from "./api_profile_weather";

export let weatherData;
export default async function getData(objValue) {
  const searchValue = "auto:ip";

  try {
    const responce = await fetch(
      `${API_PROFILE.apiUrl}${API_PROFILE.path}?key=${API_PROFILE.apiKey}&q=${searchValue}&aqi=yes`
    );
    const data = await responce.json();
    weatherData = data;
    return weatherData;
  } catch (error) {
    console.error(error);
  }
}
