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
  const [randomNumbers, setRandomNumbers] = useState([]);
  const randomArticles = [];

  const getNewRandomNumbers = () =>
    setRandomNumbers(() => {
      let newRandomNumbers = [];
      for (; newRandomNumbers.length < numberOfArticles; ) {
        let randomNumber = Math.floor(Math.random() * (originData.length - 1)); // minus 1 because there is an empty item in last array

        if (!newRandomNumbers.includes(randomNumber)) {
          newRandomNumbers.push(randomNumber);
        }
      }
      return newRandomNumbers;
    });

  useEffect(getNewRandomNumbers, [numberOfArticles, originData]);

  randomNumbers.forEach((number) => {
    randomArticles.push(originData[number]);
  });

  return (
    <div className={clsx(styles.wrapper, ["container-fluid"])}>
      <header>
        <div>
          <h1 className="text-center">Random</h1>
        </div>
        <button onClick={getNewRandomNumbers}>Refresh</button>
      </header>

      <ArticleShow articlesList={randomArticles} />
    </div>
  );
}

export default RandomArticles;
