import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./SuggestionDropdown.module.scss";

SuggestionDropdown.propTypes = {
  suggestions: PropTypes.arrayOf(String),
  input: PropTypes.string.isRequired,
  handleChoseItem: PropTypes.func.isRequired,
};

function SuggestionDropdown({
  className,
  suggestions,
  input,
  handleChoseItem,
}) {
  const classes = clsx(className, styles.wrapper);
  return (
    <div className={classes}>
      {" "}
      {suggestions
        .filter((item) => {
          return item.toLowerCase().includes(input.toLowerCase());
        })
        .slice(0, 5)
        .map((item) => {
          const lowerCaseInput = input.toLowerCase();
          const lowerCaseTag = item.toLowerCase();
          let startIndex = lowerCaseTag.indexOf(lowerCaseInput);

          return (
            <div
              className={clsx(styles.dropdownRow)}
              key={item}
              onClick={() => handleChoseItem(item)}
            >
              {item.split("").map((char, index) => {
                if (
                  index >= startIndex &&
                  index < startIndex + lowerCaseInput.length
                ) {
                  return (
                    <span key={index} className={clsx(styles.bold)}>
                      {char}
                    </span>
                  );
                } else {
                  return <span key={index}>{char}</span>;
                }
              })}
            </div>
          );
        })}
    </div>
  );
}

export default SuggestionDropdown;
