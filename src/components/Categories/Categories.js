import clsx from "clsx";
import PropTypes from "prop-types";

import styles from "./Categories.module.scss";
import { SingleTag } from "./SingleTag/";
import { ArticlesDataContext } from "~/App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Tag from "../TagComponents/Tag/Tag";

Categories.propTypes = {
  handleSort: PropTypes.func,
};

function Categories({ className, handleSort }) {
  const classes = clsx(className, styles.wrapper);
  const { tags } = useContext(ArticlesDataContext);

  let tagRender = Object.entries(tags);

  tagRender.sort((a, b) => {
    const aVal = a[1];
    const bVal = b[1];
    return bVal - aVal;
  });

  const navigate = useNavigate();
  const goToTag = (tagKey) => {
    handleSort && handleSort(tagKey);
    navigate({
      pathname: "/sortByTag",
      search: `?tag=${tagKey}`,
    });
  };

  return (
    <div className={classes}>
      <h2 className={clsx(styles.header)}>Categories</h2>

      <div className={clsx(styles.tagList)}>
        {tagRender.map((tag, idx) => (
          <Tag
            key={idx}
            className={clsx(styles.tag)}
            tagName={tag[0]}
            handleClick={() => goToTag(tag[0])}
          >
            {tag[1]}
          </Tag>
        ))}
      </div>
    </div>
  );
}

export default Categories;
