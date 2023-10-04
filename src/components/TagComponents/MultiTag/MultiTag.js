import React from "react";
import PropTypes from "prop-types";

import styles from "./MultiTag.module.scss";
import clsx from "clsx";
import Tag from "~/components/TagComponents/Tag/Tag";

MultiTag.propTypes = {
  tagRender: PropTypes.array.isRequired,
};

function MultiTag(className, tagRender) {
  return (
    <div className={clsx(className, styles.wrapper)}>
      {tagRender.map((tag, idx) => (
        <Tag key={idx} className={clsx(styles.tag)} tagName={tag}></Tag>
      ))}
    </div>
  );
}

export default MultiTag;
