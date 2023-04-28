import React from "react";
import PropTypes from "prop-types";
import { articlesData as data } from "~/data/data";
import { RandomArticles } from "~/components/RandomArticles";

SortByTag.propTypes = {};

function SortByTag({ selectedTag }) {
  let result = [];
  data.forEach((article) => {
    if (article.tags.includes(selectedTag)) {
      result.push(article);
    }
  });

  console.log(result);
  return (
    <>
      <h1>Articles by Tag: {selectedTag}</h1>
      <RandomArticles numberOfArticles={1} originData={result} />
    </>
  );
}

export default SortByTag;
