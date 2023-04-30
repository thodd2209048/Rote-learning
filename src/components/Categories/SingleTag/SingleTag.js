import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import styles from "./SingleTag.module.scss";

SingleTag.propTypes = {
  tagKey: PropTypes.string,
  numberOfArticles: PropTypes.number,
};

function SingleTag({ tagKey, numberOfArticles }) {
  const navigate = useNavigate();

  const goToTag = () => {
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
