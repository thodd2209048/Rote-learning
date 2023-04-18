import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./RandomArticles.module.scss";
import { articlesData as data } from "~/data/data";

RandomArticles.propTypes = {
  numberOfArticles: PropTypes.number.isRequired,
};

function RandomArticles({ numberOfArticles }) {
  const randomNumbers = [];

  for (; randomNumbers.length < numberOfArticles; ) {
    let randomNumber = Math.floor(Math.random() * (data.length - 1)); // minus 1 because there is an empty item in last array

    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
    console.log(randomNumbers.length);
  }

  return (
    <div className={clsx(styles.wrapper)}>
      <header>
        <h2>Random</h2>
      </header>
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
            <span className={clsx(styles.static)}>
              subject: {data[number].subject}
            </span>
            <span className={clsx(styles.static)}>
              last time read: {data[number].lastTimeRead}
            </span>
            <span className={clsx(styles.static)}>ID: {data[number].id}</span>
          </p>
        </a>
      ))}
    </div>
  );
}

export default RandomArticles;
