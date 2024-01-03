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
  onChangeValue: PropTypes.func.isRequired,
};

function TagsInput({ className, tags: articleTags, onChangeValue }) {
  const { tags: allTags } = useContext(ArticlesDataContext);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const removeTag = (tag, indexToRemove) => {
    onChangeValue(articleTags.filter((_, index) => index !== indexToRemove));
    setSuggestions((prevSuggestion) => [...prevSuggestion, tag]);
  };

  const addTag = (e) => {
    if (e.key === "Enter") {
      onChangeValue([...articleTags, e.target.value]);
      setInput("");
    }
  };

  const handleChoseItem = (item) => {
    onChangeValue([...articleTags, item]);
    setInput("");
    setSuggestions((prevSuggestion) =>
      prevSuggestion.filter((suggestion) => suggestion !== item)
    );
  };

  useEffect(() => {
    setSuggestions(Object.keys(allTags));
  }, [allTags]);
  // ------------------------  OLD  ------------------------
  return (
    <div className={clsx(className, styles.wrapper, "row d-flex flex-row")}>
      <label className={clsx(styles.label, "col-2 text-start")}>
        <span>Tags:</span>{" "}
      </label>
      <div className={clsx(styles.input, " col-10")}>
        <ul
          className={clsx(styles.tags, "d-flex flex-wrap list-unstyled gap-1")}
        >
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
          className="w-100"
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
