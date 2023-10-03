import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import styles from "./ArticleShow.module.scss";

ArticleShow.propTypes = {
  articlesList: PropTypes.array.isRequired,
};

function ArticleShow({ articlesList }) {
  return (
    <div>
      {articlesList.map((article, idx) => (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
          key={idx}
          href={article.link || article.url}
          target="_blank"
          className={clsx(styles.article)}
        >
          <h4 className={clsx(styles.title)}>{article.title}</h4>
          <p className={clsx(styles.subject)}>
            <span className={clsx(styles.static)}>
              subject: {article.subject}
            </span>
            <span className={clsx(styles.static)}>
              last time read: {article.lastTimeRead}
            </span>
            <span className={clsx(styles.static)}>ID: {article.id}</span>
          </p>
        </a>
      ))}
    </div>
  );
}

export default ArticleShow;
