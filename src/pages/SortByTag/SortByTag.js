import React from "react";
import PropTypes from "prop-types";

import { articlesData as data } from "~/data/data";
import { RandomArticles } from "~/components/RandomArticles";
import { ListMultiPages } from "~/components/ListMultiPages";

SortByTag.propTypes = {
  selectedTag: PropTypes.string.isRequired,
};

function SortByTag({ selectedTag }) {
  let result = [];
  data.forEach((article) => {
    if (article.tags.includes(selectedTag)) {
      result.push(article);
    }
  });

  return (
    <>
      <h1>Articles by Tag: {selectedTag}</h1>
      <RandomArticles numberOfArticles={1} originData={result} />
      <h2>All article</h2>
      <ListMultiPages list={result} articlePerPage={5} />
    </>
  );
}

export default SortByTag;
