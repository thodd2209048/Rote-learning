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
  const [articles, setArticles] = useState([]);
  const [randomArticles, setRandomArticles] = useState([]);

  const getNewRandomArticles = () => {
    const newRandomNumbers = [];

    for (
      ;
      newRandomNumbers.length < numberOfArticles &&
      numberOfArticles <= articles.length;

    ) {
      console.log("1loop");
      let randomNumber = Math.floor(Math.random() * articles.length);
      if (!newRandomNumbers.includes(randomNumber)) {
        newRandomNumbers.push(randomNumber);
      }
    }
    const newRandomArticles = newRandomNumbers.map(
      (number) => articles[number]
    );
    console.log("2newRandomArticles", newRandomArticles);
    setRandomArticles(newRandomArticles);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:8080/api/article");
        const data = res.data;
        setArticles(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    getNewRandomArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfArticles, articles]);

  console.log("3articles.length", articles.length);
  console.log("4randomArticles", randomArticles);
  return (
    <div className={clsx(styles.wrapper)}>
      <header>
        <div>
          <h1 className="text-center">Random</h1>
        </div>
        <button onClick={getNewRandomArticles}>Refresh</button>
      </header>

      <ArticleShow articlesList={randomArticles} />
    </div>
  );
}

export default RandomArticles;
