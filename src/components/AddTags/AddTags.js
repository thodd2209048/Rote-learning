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

  const findTag = (e) => {
    setInput(e.target.value);
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
        type="text"
        placeholder="Enter to add tag"
        onKeyUp={addTag}
        onChange={findTag}
      />
      {input && (
        <div className={clsx(styles.dropdown)}>
          {suggestions
            .filter((item) => {
              const lowercaseInput = input.toLowerCase();
              const lowercaseTagName = item.toLowerCase();
              return (
                lowercaseInput && lowercaseTagName.includes(lowercaseInput)
              );
            })
            .slice(0, 5)
            .map((item) => (
              <div className={clsx(styles.dropdownRow)} key={item}>
                {item}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default AddTags;
