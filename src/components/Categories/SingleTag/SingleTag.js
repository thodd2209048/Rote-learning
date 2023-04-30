import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

SingleTag.propTypes = {
  tagKey: PropTypes.string,
  numberOfArticles: PropTypes.number,
};

function SingleTag({ tagKey, numberOfArticles }) {
  const navigate = useNavigate();

  const goToTag = () => {
    navigate({
      pathname: "/sortByTag",
      search: `?tag=${numberOfArticles}`,
    });
  };

  return (
    // <span onClick={goToTag}>
    <span>
      {tagKey}:{numberOfArticles}
    </span>
  );
}

export default SingleTag;
