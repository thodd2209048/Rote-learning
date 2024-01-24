import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./RadioOption.module.scss";

RadioOption.propTypes = {
  className: PropTypes.string,
  checkedValue: PropTypes.string,
  option: PropTypes.object,
  handleClick: PropTypes.func,
  children: PropTypes.node,
  value: PropTypes.string,
};

function RadioOption({
  className,
  checkedValue,
  option,
  handleClick,
  children,
  value,
}) {
  const classes = clsx(className, styles.wrapper);

  const optionStyle =
    checkedValue === value ? "btn-outline-primary" : "btn-outline-secondary ";

  return (
    <div className={classes}>
      <div
        className={clsx(
          styles.option,
          optionStyle,
          "btn btn-sm rounded-pill p-1 text-nowrap"
        )}
        onClick={() => handleClick()}
      >
        {children}
      </div>
    </div>
  );
}

export default RadioOption;
