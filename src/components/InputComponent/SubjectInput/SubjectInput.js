import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import axios from "axios";

import SuggestionDropdown from "~/components/SuggestionDropdown/SuggestionDropdown";
import styles from "./SubjectInput.module.scss";

SubjectInput.propTypes = {
  subject: PropTypes.string.isRequired,
  setSubject: PropTypes.func.isRequired,
};

function SubjectInput({ className, subject, setSubject }) {
  const classes = clsx(className, styles.wrapper);
  const [suggestions, setSuggestions] = useState([]);
  const [isShowSuggestion, setIsShowSuggestion] = useState(false);

  const handleChoseItem = (item) => {
    setSubject(item);
    setIsShowSuggestion(false);
  };

  const handleChange = (e) => {
    setSubject(e.target.value);
    setIsShowSuggestion(true);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/article/subjects"
        );
        const data = res.data;
        setSuggestions(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className={classes}>
      <label htmlFor="subjectInput">Subject: </label>
      <div className={clsx(styles.input)}>
        <input
          type="text"
          id="subjectInput"
          placeholder="Subject"
          value={subject}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Tab") {
              setIsShowSuggestion(false);
            }
          }}
        />
        {subject && isShowSuggestion && (
          <SuggestionDropdown
            className={clsx(styles.dropdown)}
            suggestions={suggestions}
            input={subject}
            handleChoseItem={handleChoseItem}
          />
        )}
      </div>
    </div>
  );
}

export default SubjectInput;
