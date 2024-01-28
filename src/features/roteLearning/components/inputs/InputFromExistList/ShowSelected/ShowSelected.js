import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import Tag from "~/components/TagComponents/Tag/Tag";

import styles from "./ShowSelected.module.scss";
import { ReactComponent as CloseSvg } from "~/assets/Images/close.svg";

ShowSelected.propTypes = {};

function ShowSelected({ selectedItems, handleDeselectItem }) {
  return (
    <div>
      <ul
        className={clsx(
          styles.tags,
          "d-flex flex-wrap list-unstyled gap-1 mb-2"
        )}
      >
        {selectedItems?.map((item) => (
          <li className={clsx(styles.tag)} key={item.name}>
            <Tag tagName={item.name}>
              <CloseSvg
                className={clsx(styles.closeIcon)}
                onClick={() => handleDeselectItem(item)}
              />
            </Tag>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowSelected;
