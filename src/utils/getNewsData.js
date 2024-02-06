import { API_PROFILE_NEWS } from "./api_profile_news";

export let newsData;
export default async function getData(...obj) {
  const searchValue = obj[0] || "crypto";
  try {
    const responce = await fetch(
      `${API_PROFILE_NEWS.apiUrl}${API_PROFILE_NEWS.newsPath}?q=${searchValue}&${API_PROFILE_NEWS.apiKey}`
    );
    const data = await responce.json();
    newsData = data;
    return newsData;
  } catch (error) {
    console.error(error);
  }
}
