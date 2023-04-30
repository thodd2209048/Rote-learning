import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import styles from "./SingleTag.module.scss";
import { useContext } from "react";
import { HandleSortContext } from "~/pages/SortByTag";

SingleTag.propTypes = {
  tagKey: PropTypes.string,
  numberOfArticles: PropTypes.number,
};

function SingleTag({ tagKey, numberOfArticles }) {
  const navigate = useNavigate();
  const handleSort = useContext(HandleSortContext);

  const goToTag = () => {
    handleSort && handleSort(tagKey);
    navigate({
      pathname: "/sortByTag",
      search: `?tag=${tagKey}`,
    });
  };

  return (
    <span className={clsx(styles.tag)} onClick={goToTag}>
      {tagKey}:{numberOfArticles}
    </span>
  );
}

export default SingleTag;
