import clsx from "clsx";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";

import { ArticlesDataContext } from "~/App";
import { ArticleShow } from "~/components/ArticleShow";
import styles from "./RandomArticles.module.scss";

RandomArticles.propTypes = {
  numberOfArticles: PropTypes.number.isRequired,
};

function RandomArticles({ className, numberOfArticles, originList }) {
  const [randomArticles, setRandomArticles] = useState([]);

  const getNewRandomArticles = (fullList) => {
    const newRandomNumbers = [];
    for (
      ;
      newRandomNumbers.length < numberOfArticles &&
      newRandomNumbers.length < fullList.length;

    ) {
      let randomNumber = Math.floor(Math.random() * fullList.length);
      if (!newRandomNumbers.includes(randomNumber)) {
        newRandomNumbers.push(randomNumber);
      }
    }
    const newRandomArticles = newRandomNumbers.map(
      (number) => fullList[number]
    );
    setRandomArticles(newRandomArticles);
  };

  useEffect(() => {
    console.log("fetch");
    getNewRandomArticles(originList);
  }, [originList]);

  return (
    <div className={clsx(className, styles.wrapper, "container")}>
      <header>
        <div>
          <h1 className="text-center">Random</h1>
        </div>
        <button
          className={clsx(styles.button)}
          onClick={() => getNewRandomArticles(originList)}
        >
          Refresh
        </button>
      </header>

      {randomArticles.length > 0 && (
        <ArticleShow articlesList={randomArticles} />
      )}
    </div>
  );
}

export default RandomArticles;
