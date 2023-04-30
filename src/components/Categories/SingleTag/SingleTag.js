import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

SingleTag.propTypes = {
  tagKey: PropTypes.string,
  tagValue: PropTypes.number,
};

function SingleTag({ tagKey, tagValue }) {
  const navigate = useNavigate();

  const goToTag = () => {
    navigate({
      pathname: "/sortByTag",
      search: `?tag=${tagKey}`,
    });
  };

  return (
    <span onClick={goToTag}>
      {tagKey}:{tagValue} {" | "}
    </span>
  );
}

export default SingleTag;
