import clsx from "clsx";
import PropTypes from "prop-types";

import { articlesData as data } from "~/data/data";
import styles from "./Categories.module.scss";
import { SingleTag } from "./SingleTag/";

Categories.propTypes = {
  handleSort: PropTypes.func,
};

function Categories(props) {
  const tagList = {};

  function addTag(article) {
    article.tags.forEach((tag) => {
      if (!tagList[tag]) {
        tagList[tag] = 1;
      } else {
        tagList[tag]++;
      }
    });
  }

  data.forEach((article) => {
    addTag(article);
  });

  let tagRender = Object.entries(tagList);

  tagRender.sort((a, b) => {
    const aVal = a[1];
    const bVal = b[1];
    return bVal - aVal;
  });

  // const handleSort = useContext(HandleSortContext);

  return (
    <div className={clsx(styles.wrapper)}>
      <h2 className={clsx(styles.header)}>Categories</h2>
      <div className={clsx(styles["tag-list"])}>
        {tagRender.map((tag, idx) => {
          return (
            <span key={idx} className={clsx(styles.tag)}>
              <SingleTag tagKey={tag[0]} numberOfArticles={tag[1]} />
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
