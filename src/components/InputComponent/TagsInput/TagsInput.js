import clsx from "clsx";
import PropTypes from "prop-types";
import { ReactComponent as CloseSvg } from "~/assets/Images/close.svg";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import SuggestionDropdown from "../../SuggestionDropdown/SuggestionDropdown";
import styles from "./TagsInput.module.scss";
import Tag from "~/components/TagComponents/Tag/Tag";
import { ArticlesDataContext } from "~/App";

TagsInput.propTypes = {
  tags: PropTypes.array.isRequired,
  setTags: PropTypes.func.isRequired,
};

function TagsInput({ className, tags: articleTags, setTags }) {
  const { tags: allTags } = useContext(ArticlesDataContext);
  const classes = clsx(className, styles.wrapper);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const removeTag = (tag, indexToRemove) => {
    setTags(articleTags.filter((_, index) => index !== indexToRemove));
    setSuggestions((prevSuggestion) => [...prevSuggestion, tag]);
  };

  const addTag = (e) => {
    if (e.key === "Enter") {
      setTags([...articleTags, e.target.value]);
      setInput("");
    }
  };

  const handleChoseItem = (item) => {
    setTags([...articleTags, item]);
    setInput("");
    setSuggestions((prevSuggestion) =>
      prevSuggestion.filter((suggestion) => suggestion !== item)
    );
  };

  useEffect(() => {
    setSuggestions(Object.keys(allTags));
  }, [allTags]);

  return (
    <div className={classes}>
      <label>Tags: </label>
      <div className={clsx(styles.input)}>
        <ul className={clsx(styles.tags)}>
          {articleTags.map((tag, index) => (
            <li className={clsx(styles.tag)} key={index}>
              <Tag tagName={tag}>
                <CloseSvg
                  className={clsx(styles.closeIcon)}
                  onClick={() => removeTag(tag, index)}
                />
              </Tag>
            </li>
          ))}
        </ul>
        <input
          placeholder="Enter to add tag"
          value={input}
          onKeyDown={addTag}
          onChange={(e) => setInput(e.target.value)}
        />
        {input && (
          <SuggestionDropdown
            className={clsx(styles.dropdown)}
            suggestions={suggestions}
            input={input}
            handleChoseItem={handleChoseItem}
          />
        )}
      </div>
    </div>
  );
}

export default TagsInput;
