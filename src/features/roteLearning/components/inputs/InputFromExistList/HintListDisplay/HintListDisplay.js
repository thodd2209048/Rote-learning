import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./HintListDisplay.module.scss";
import Tag from "~/components/TagComponents/Tag/Tag";

HintListDisplay.propTypes = {};

function HintListDisplay({ hintList, handleSelectItem }) {
  return (
    <div className={clsx(styles.wrapper, "mt-1")}>
      {hintList?.slice(0, 5).map((item) => (
        <Tag
          bg="secondary"
          key={item.name}
          tagName={item.name}
          handleClickTag={() => handleSelectItem(item)}
        ></Tag>
      ))}
    </div>
  );
}

export default HintListDisplay;
