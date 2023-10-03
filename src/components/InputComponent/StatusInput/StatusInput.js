import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./StatusInput.module.scss";

StatusInput.propTypes = {};

function StatusInput({ className, setStatus }) {
  const classes = clsx(className, styles.wrapper);
  return (
    <div className={classes}>
      <label htmlFor="">Status: </label>
      <div className={clsx(styles.input)}>
        <div className={clsx(styles.inputContainer)}>
          <label htmlFor="statusInProcess">In process</label>
          <input
            type="radio"
            id="statusInProcess"
            name="status"
            onClick={() => {
              setStatus("in progress");
            }}
          />
        </div>
        <div className={clsx(styles.inputContainer)}>
          <label htmlFor="statusComplete">Complete</label>
          <input
            type="radio"
            id="statusComplete"
            name="status"
            onClick={() => {
              setStatus("completed");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default StatusInput;
