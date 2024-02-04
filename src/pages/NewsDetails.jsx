import React, { useEffect, useState } from "react";
import { useApp } from "../utils/context";
import { useParams } from "react-router-dom";

export default function NewsDetails() {
  const { get_news_data } = useApp();
  const [detailsNews, setDetailsNews] = useState(null);
  const { title } = useParams();
  const updateNews = async (params) => {
    try {
      const data = await get_news_data();
      const filteredNews = data.articles?.filter(
        (item) => item.title === params
      );
      filteredNews.length > 0
        ? setDetailsNews(filteredNews[0])
        : console.error(`News with title ${params} not found`);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    updateNews(title);
  }, [title]);

  if (!detailsNews) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{detailsNews.title}</h1>
      <p>{detailsNews.content}</p>
      <img src={detailsNews.urlToImage} alt="News image" />
    </div>
  );
}