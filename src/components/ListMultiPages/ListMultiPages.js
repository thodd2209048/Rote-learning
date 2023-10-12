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
  let maxPage =
    list.length % articlePerPage === 0
      ? list.length / articlePerPage
      : Math.floor(list.length / articlePerPage) + 1;

  return (
    <div className={clsx(styles.wrapper, ["container-fluid"])}>
      <ArticleShow articlesList={currentList} />
      {!!maxPage && (
        <div className={clsx(styles.buttons)}>
          <button
            className={clsx(styles.button)}
            onClick={() =>
              setCurrentPage((prev) => (prev === 1 ? 1 : prev - 1))
            }
          >
            Prev
          </button>
          <span>
            Page: {currentPage} / {maxPage}
          </span>
          <button
            className={clsx(styles.button)}
            onClick={() =>
              setCurrentPage((prev) => (prev === maxPage ? prev : prev + 1))
            }
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default ListMultiPages;
