import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./RandomArticles.module.scss";

import { ArticleShow } from "~/components/ArticleShow";

RandomArticles.propTypes = {
  numberOfArticles: PropTypes.number.isRequired,
  originData: PropTypes.array.isRequired,
};

function RandomArticles({ numberOfArticles, originData }) {
  const [randomArticles, setRandomArticles] = useState([]);

  const getNewRandomArticles = () => {
    const newRandomNumbers = [];

    for (; newRandomNumbers.length < numberOfArticles; ) {
      let randomNumber = Math.floor(Math.random() * (originData.length - 1)); // minus 1 because there is an empty item in last array

      if (!newRandomNumbers.includes(randomNumber)) {
        newRandomNumbers.push(randomNumber);
      }
    }
    const newRandomArticles = newRandomNumbers.map(
      (number) => originData[number]
    );
    setRandomArticles(newRandomArticles);
  };

  useEffect(() => {
    getNewRandomArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfArticles, originData]);

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
