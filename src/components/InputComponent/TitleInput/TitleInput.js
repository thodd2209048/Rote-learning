import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./TitleInput.module.scss";

TitleInput.propTypes = {};

function TitleInput({ className, title, setTitle }) {
  const classes = clsx(className, styles.wrapper);
  return (
    <div className={classes}>
      <label htmlFor="titleInput">Title:</label>
      <div className={clsx(styles.input)}>
        <input
          type="text"
          id="titleInput"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    </div>
  );
}

export default TitleInput;
