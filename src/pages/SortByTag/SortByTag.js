import PropTypes from "prop-types";
import { useContext, useState } from "react";

import clsx from "clsx";
import queryString from "query-string";
import { createContext } from "react";
import { useLocation } from "react-router-dom";
import { ListMultiPages } from "~/components/ListMultiPages";
import { RandomArticles } from "~/components/RandomArticles";
import { Categories } from "../../components/Categories";
import styles from "./SortByTag.module.scss";
import { ArticlesDataContext } from "~/App";

const HandleSortContext = createContext(null);

SortByTag.propTypes = {
  selectedTag: PropTypes.string,
};

function SortByTag(props) {
  const location = useLocation();
  const allArticle = useContext(ArticlesDataContext);
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

      <HandleSortContext.Provider value={handleSort}>
        <Categories />
      </HandleSortContext.Provider>
    </>
  );
}

export default SortByTag;
export { HandleSortContext };
