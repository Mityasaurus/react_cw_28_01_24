import React, { useEffect, useState } from "react";
import s from "../style/news.module.css";
import { useApp } from "./../utils/context";
import { Link } from "react-router-dom";

const News = () => {
  const { get_news_data, globalState, isDarkMode } = useApp();
  const [inputValue, setInputValue] = useState("");
  //   console.log(newsData);
  const fetchData = async () => {
    try {
      await get_news_data(inputValue);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  function onInputChange(e) {
    setInputValue(e.target.value);
  }

  function onSearchFormSubmit(e) {
    e.preventDefault();
    fetchData();
  }

  return (
    <div className={s.newsPage}>
      <h1>Top news for you</h1>
      <form onSubmit={onSearchFormSubmit}>
        <input
          type="text"
          placeholder="What are you looking for?"
          value={inputValue}
          onChange={onInputChange}
        />
        <button>Пошук</button>
      </form>
      <div className={s.newsBox}>
        {globalState.articles?.map((newsItem) => {
          return (
            <Link
              to={`/news/${newsItem.title}`}
              style={{ color: isDarkMode ? "#fff" : "#000" }}
            >
              <div className={s.newsCard} key={newsItem.id}>
                <img src={newsItem.urlToImage} alt="" />
                <div>
                  <h2>{newsItem.title}</h2>
                  <p>{newsItem.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default News;
