import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";

import { articlesData as data } from "~/data/data";
import styles from "./Categories.module.scss";
import { SingleTag } from "./SingleTag";

Categories.propTypes = {
  handleSort: PropTypes.func,
};

function Categories({ handleSort }) {
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
      <div className={clsx(styles["tag-list"])}>
        {tagRender.map((tag, idx) => {
          const tagKey = tag[0];
          const numberOfArticles = tag[1];

          return (
            <span
              key={idx}
              onClick={() => handleSort(tagKey)}
              className={clsx(styles.tag)}
            >
              <SingleTag tagKey={tagKey} numberOfArticles={numberOfArticles} />
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
