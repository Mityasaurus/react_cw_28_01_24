import { API_PROFILE } from "./api_profile";

export let newsData;
export default async function getData(objValue) {
  const searchValue = "ukraine";
  try {
    const responce = await fetch(
      `${API_PROFILE.apiUrl}${API_PROFILE.newsPath}?q=${searchValue}&${API_PROFILE.apiKey}`
    );
    const data = await responce.json();
    newsData = data;
    return newsData;
  } catch (error) {
    console.error(error);
  }
}
