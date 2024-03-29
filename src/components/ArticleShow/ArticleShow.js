import React, { useEffect, useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import styles from "./ArticleShow.module.scss";
import Article from "../Article/Article";

ArticleShow.propTypes = {
  articlesList: PropTypes.array.isRequired,
};

function ArticleShow({ articlesList }) {
  return (
    <div className="d-flex flex-column text-start mt-2 gap-4">
      {articlesList.map((article, idx) => {
        return (
          <Article updateBtns key={idx} article={article} />
          // eslint-disable-next-line react/jsx-no-target-blank
          // <div className={clsx(styles.article)}>
          //   <a
          //     key={idx}
          //     href={article.link || article.url}
          //     target="_blank"
          //     rel="noreferrer"
          //   >
          //     <h4 className={clsx(styles.title)}>{article.title}</h4>
          //   </a>
          //   <div className={clsx(styles.info)}>
          //     <span className={clsx(styles.static)}>
          //       subject: {article.subject}
          //     </span>

          //     {/* <MultiTag tagRender={article.tags} /> */}
          //     <span className={clsx(styles.static)}>
          //       last time read: {article.lastTimeRead}
          //     </span>
          //     <span className={clsx(styles.static)}>ID: {article.id}</span>
          //   </div>

          //   <span className={clsx(styles.tags)}>
          //     {article.tags.map((tag, idx) => (
          //       <Tag key={idx} className={clsx(styles.tag)} tagName={tag}></Tag>
          //     ))}
          //   </span>
          // </div>
        );
      })}
    </div>
  );
}

export default ArticleShow;
