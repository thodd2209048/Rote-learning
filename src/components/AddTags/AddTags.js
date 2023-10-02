import clsx from "clsx";
import PropTypes from "prop-types";
import { ReactComponent as CloseSvg } from "~/assets/Images/close.svg";
import styles from "./Addtags.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import SuggestionDropdown from "../SuggestionDropdown/SuggestionDropdown";

AddTags.propTypes = {
  tags: PropTypes.array.isRequired,
  setTags: PropTypes.func.isRequired,
};

function AddTags({ tags, setTags }) {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const removeTag = (tag, indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
    setSuggestions((prevSuggestion) => [...prevSuggestion, tag]);
  };

  const addTag = (e) => {
    if (e.key === "Enter") {
      setTags([...tags, e.target.value]);
      setInput("");
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
              onClick={() => removeTag(tag, index)}
            />
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
  );
}

export default AddTags;
