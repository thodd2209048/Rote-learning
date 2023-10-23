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
    checkedValue === option ? "btn-outline-primary" : "btn-outline-secondary";

  return (
    <div className={classes}>
      <btn
        className={clsx(
          styles.option,
          optionStyle,
          "btn btn-sm rounded-pill p-1 text-nowrap"
        )}
        onClick={() => {
          onChangeValue(option);
        }}
      >
        {option}
      </btn>
    </div>
  );
}

export default RadioOption;
