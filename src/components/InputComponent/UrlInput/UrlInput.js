import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./UrlInput.module.scss";

UrlInput.propTypes = {};

function UrlInput({ className, url, setUrl }) {
  const classes = clsx(className, styles.wrapper);
  return (
    <div className={classes}>
      <label htmlFor="urlInput">URL:</label>
      <div className={clsx(styles.input)}>
        <input
          type="text"
          id="urlInput"
          placeholder="https://"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
    </div>
  );
}

export default UrlInput;
