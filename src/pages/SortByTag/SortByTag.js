import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { articlesData as allArticle } from "~/data/data";
import { RandomArticles } from "~/components/RandomArticles";
import { ListMultiPages } from "~/components/ListMultiPages";
import styles from "./SortByTag.module.scss";
import clsx from "clsx";
import { Categories } from "../../components/Categories";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

SortByTag.propTypes = {
  selectedTag: PropTypes.string,
};

function SortByTag(props) {
  const location = useLocation();
  const [queryTag, setQueryTag] = useState(() => {
    const params = queryString.parse(location.search);
    return params.tag || "all";
  });

  const [sortedTagList, setSortedTagList] = useState(allArticle);

  const handleSort = (newTag) => {
    setQueryTag(newTag);
    const newSortedTagList = allArticle.filter((article) =>
      article.tags.includes(newTag)
    );
    setSortedTagList(newSortedTagList);
  };

  return (
    <>
      <h1>Articles by Tag: {queryTag}</h1>
      {sortedTagList.length > 0 ? (
        <>
          <RandomArticles numberOfArticles={1} originData={sortedTagList} />
          <h2>All article</h2>
          <ListMultiPages list={sortedTagList} articlePerPage={5} />
        </>
      ) : (
        <span className={clsx(styles.warning)}>Can not found!!!</span>
      )}
      <button onClick={() => handleSort("HTML")}>set query tag</button>

      <Categories setQueryTag={setQueryTag} />
    </>
  );
}

export default SortByTag;
