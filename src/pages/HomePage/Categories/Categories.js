import React from "react";
import PropTypes from "prop-types";

import { articlesData as data } from "~/data/data";

Categories.propTypes = {};

function Categories(props) {
  const tagList = new Map();

  function addTag(article) {
    article.tags.forEach((tag) => {
      tagList[tag]++;
    });
  }

  data.forEach((article) => {
    addTag(article);
  });

  console.log(tagList);
  return <div>tagList</div>;
}

export default Categories;
