import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./RadioOption.module.scss";

RadioOption.propTypes = {
  onChangeValue: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

function RadioOption({
  className,
  value: checkedValue,
  onChangeValue,
  option,
  id,
}) {
  const classes = clsx(className, styles.wrapper);

  const optionStyle =
    checkedValue === option ? styles.checked : styles.unchecked;

  return (
    <div className={classes}>
      <div
        className={clsx(styles.option, optionStyle)}
        onClick={() => {
          onChangeValue(option);
        }}
      >
        {option}
      </div>
    </div>
  );
}

export default RadioOption;
