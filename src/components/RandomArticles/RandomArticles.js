import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./RandomArticles.module.scss";

import { ArticleShow } from "~/components/ArticleShow";
import axios from "axios";

RandomArticles.propTypes = {
  numberOfArticles: PropTypes.number.isRequired,
};

function RandomArticles({ numberOfArticles }) {
  const [randomArticles, setRandomArticles] = useState([]);
  const [articles, setArticles] = useState([]);

  const getNewRandomArticles = (articles) => {
    console.log("articles", articles);
    const newRandomNumbers = [];

    for (
      ;
      newRandomNumbers.length < numberOfArticles &&
      newRandomNumbers.length < articles.length;

    ) {
      let randomNumber = Math.floor(Math.random() * 2);
      console.log(newRandomNumbers.length);
      if (!newRandomNumbers.includes(randomNumber)) {
        newRandomNumbers.push(randomNumber);
      }
    }
    const newRandomArticles = newRandomNumbers.map(
      (number) => articles[number]
    );
    setRandomArticles(newRandomArticles);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:8080/api/article");
        console.log("res", res);
        if (res.status === 200) {
          getNewRandomArticles(res.data);
          setArticles(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={clsx(styles.wrapper)}>
      <header>
        <div>
          <h1 className="text-center">Random</h1>
        </div>
        <button onClick={() => getNewRandomArticles(articles)}>Refresh</button>
      </header>

      {randomArticles.length > 0 && (
        <ArticleShow articlesList={randomArticles} />
      )}
    </div>
  );
}

export default RandomArticles;
