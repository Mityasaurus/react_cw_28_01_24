import React, { useEffect, useState } from "react";
import getData from "../utils/getNewsData";
import s from "../style/news.module.css";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  //   console.log(newsData);
  const fetchData = async () => {
    try {
      const result = await getData();
      setNewsData(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={s.newsPage}>
      <h1>Top news for you</h1>
      <div className={s.newsBox}>
        {newsData.articles?.map((newsItem) => {
          return (
            <div className={s.newsCard}>
              <img src={newsItem.urlToImage} alt="" />
              <div>
                <h2>{newsItem.title}</h2>
                <p>{newsItem.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
