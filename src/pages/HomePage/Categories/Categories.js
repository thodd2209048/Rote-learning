import clsx from "clsx";
import React from "react";

import { articlesData as data } from "~/data/data";
import styles from "./Categories.module.scss";

function Categories(props) {
  const tagList = {};

  function addTag(article) {
    article.tags.forEach((tag) => {
      if (!tagList[tag]) {
        tagList[tag] = 1;
      } else {
        tagList[tag]++;
      }
    });
  }

  data.forEach((article) => {
    addTag(article);
  });

  let tagRender = Object.entries(tagList);

  tagRender.sort((a, b) => {
    const aVal = a[1];
    const bVal = b[1];
    return bVal - aVal;
  });

  return (
    <div className={clsx(styles.wrapper)}>
      <h2 className={clsx(styles.header)}>Categories</h2>
      {tagRender.map((tag, idx) => (
        <span key={idx}>
          {tag[0]}:{tag[1]} {" | "}
        </span>
      ))}
    </div>
  );
}

export default Categories;
