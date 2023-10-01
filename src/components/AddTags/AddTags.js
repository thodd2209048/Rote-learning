import clsx from "clsx";
import PropTypes from "prop-types";
import { ReactComponent as CloseSvg } from "~/assets/Images/close.svg";
import styles from "./Addtags.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

AddTags.propTypes = {
  tags: PropTypes.array.isRequired,
  setTags: PropTypes.func.isRequired,
};

function AddTags({ tags, setTags, tagList }) {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

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
    setSuggestions((prevSuggestion) =>
      prevSuggestion.filter((suggestion) => suggestion !== item)
    );
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:8080/api/tags/tagNames");
        const data = res.data;
        setSuggestions(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

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
