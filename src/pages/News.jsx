import React, { useEffect, useState } from "react";
import getData from "../utils/getData";

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
    <div>
      <h1>Top news for you</h1>
      <div>
        {newsData.articles?.map((newsItem) => {
          return (
            <div>
              <img src={newsItem.urlToImage} alt="" />
              <h2>{newsItem.title}</h2>
              <p>{newsItem.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
