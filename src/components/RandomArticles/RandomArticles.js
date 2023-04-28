import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./RandomArticles.module.scss";

import { ArticleShow } from "~/components/ArticleShow";
import RefreshBtn from "./RefreshBtn/RefreshBtn";

RandomArticles.propTypes = {
  numberOfArticles: PropTypes.number.isRequired,
  originData: PropTypes.array.isRequired,
};

function RandomArticles({ numberOfArticles, originData }) {
  const randomNumbers = [];
  const randomArticles = [];

  const refreshPage = () => {
    window.location.reload(false);
  };

  for (; randomNumbers.length < numberOfArticles; ) {
    let randomNumber = Math.floor(Math.random() * (originData.length - 1)); // minus 1 because there is an empty item in last array

    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  randomNumbers.forEach((number) => {
    randomArticles.push(originData[number]);
  });

  return (
    <div className={clsx(styles.wrapper, ["container"])}>
      <header>
        <div>
          <h1 className="text-center">Random</h1>
        </div>
        <RefreshBtn />
      </header>

      <ArticleShow articlesList={randomArticles} />
    </div>
  );
}

export default RandomArticles;
