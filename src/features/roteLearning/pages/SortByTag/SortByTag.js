import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";

import clsx from "clsx";
import queryString from "query-string";
import { createContext } from "react";
import { useLocation } from "react-router-dom";
import { ListMultiPages } from "~/components/ListMultiPages";
import { RandomArticles } from "~/components/RandomArticles";

import styles from "./SortByTag.module.scss";
import { ArticlesDataContext } from "~/App";
import { Categories } from "~/components/Categories";

SortByTag.propTypes = {
  selectedTag: PropTypes.string,
};

function SortByTag(props) {
  const location = useLocation();
  const { articles } = useContext(ArticlesDataContext);
  const [sortedArticleList, setSortedArticleList] = useState([]);
  const [queryTag, setQueryTag] = useState(() => {
    const params = queryString.parse(location.search);
    return params.tag || "all";
  });

  const handleSort = (newTag) => {
    setQueryTag(newTag);
    const newSortedTagList = articles.filter((article) =>
      article.tags.includes(newTag)
    );
    setSortedArticleList(newSortedTagList);
  };

  useEffect(() => {
    setSortedArticleList(articles);
    handleSort(queryTag);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articles, queryTag]);

  return (
    <>
      <h1>Articles by Tag: {queryTag}</h1>
      {sortedArticleList.length > 0 ? (
        <>
          <RandomArticles numberOfArticles={1} originList={sortedArticleList} />
          <div className={clsx(styles.allArticle, "container-fluid")}>
            <h2>All article sorted by tag [{queryTag}]</h2>
            <ListMultiPages list={sortedArticleList} articlePerPage={5} />
          </div>
        </>
      ) : (
        <span className={clsx(styles.warning)}>Can not found!!!</span>
      )}

      <Categories
        className={clsx(styles.categories, "container-fluid")}
        handleSort={handleSort}
      />
    </>
  );
}

export default SortByTag;
