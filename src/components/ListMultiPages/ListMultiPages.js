import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { ArticleShow } from "../ArticleShow";
import styles from "./ListMultiPages.module.scss";

ListMultiPages.propTypes = {
  list: PropTypes.array.isRequired,
  articlePerPage: PropTypes.number.isRequired,
};

function ListMultiPages({ list, articlePerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  let firstArticle = (currentPage - 1) * articlePerPage;
  let nextFirstArticle = currentPage * articlePerPage;
  let currentList = list.slice(firstArticle, nextFirstArticle);

  return (
    <div className={clsx(styles.wrapper, ["container-fluid"])}>
      <ArticleShow articlesList={currentList} />
      <button onClick={() => setCurrentPage((prev) => prev - 1)}>Prev</button>
      <span>Page: {currentPage}</span>
      <button onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
    </div>
  );
}

export default ListMultiPages;
