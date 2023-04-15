import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { articlesData as data } from "../../../data/data";
import styles from "./RandomArticles.module.scss";

RandomArticles.propTypes = {
  numberOf: PropTypes.number.isRequired,
};

function RandomArticles({ numberOf }) {
  const randomNumbers = [];
  let dataLength = data.length;

  for (; randomNumbers.length <= numberOf; ) {
    let randomNumber = Math.floor(Math.random() * (dataLength - 1)); // minus 1 because there is an empty item in last array

    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  return (
    <div className={clsx(styles.wrapper)}>
      {randomNumbers.map((number, idx) => (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
          key={idx}
          href={data[number].link}
          target="_blank"
          className={clsx(styles.article)}
        >
          <h4 className={clsx(styles.title)}>{data[number].title}</h4>

          <p className={clsx(styles.subject)}>
            subject: {data[number].subject}
          </p>
        </a>
      ))}
    </div>
  );
}

export default RandomArticles;
