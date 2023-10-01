import clsx from "clsx";
import PropTypes from "prop-types";
import { ReactComponent as CloseSvg } from "~/assets/Images/close.svg";
import styles from "./Addtags.module.scss";
import { useState } from "react";

AddTags.propTypes = {
  tags: PropTypes.array.isRequired,
  setTags: PropTypes.func.isRequired,
  tagList: PropTypes.array.isRequired,
};

function AddTags({ tags, setTags, tagList }) {
  const suggestions = tagList;
  const [input, setInput] = useState("");

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const addTag = (e) => {
    if (e.key === "Enter") {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };

  const handleChoseItem = (item) => {
    setTags([...tags, item]);
    setInput("");
  };

  return (
    <div className={clsx(styles.wrapper)}>
      <ul className={clsx(styles.tags)}>
        {tags.map((tag, index) => (
          <li className={clsx(styles.tag)} key={index}>
            <span>{tag} </span>
            <CloseSvg
              className={clsx(styles.closeIcon)}
              onClick={() => removeTag(index)}
            />
          </li>
        ))}
      </ul>
      <input
        placeholder="Enter to add tag"
        value={input}
        onKeyUp={addTag}
        onChange={(e) => setInput(e.target.value)}
      />
      {input && (
        <div className={clsx(styles.dropdown)}>
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
      )}
    </div>
  );
}

export default AddTags;
