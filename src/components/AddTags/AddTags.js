import clsx from "clsx";
import PropTypes from "prop-types";
import { ReactComponent as CloseSvg } from "~/assets/Images/close.svg";
import styles from "./Addtags.module.scss";

AddTags.propTypes = {
  tags: PropTypes.array.isRequired,
  setTags: PropTypes.func.isRequired,
};

function AddTags({ tags, setTags }) {
  // const [tags, setTags] = useState(["Java", "ReactJS"]);

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };
  const addTag = (e) => {
    if (e.key === "Enter") {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };
  console.log(tags);
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
      <input type="text" placeholder="Enter to add tag" onKeyUp={addTag} />
    </div>
  );
}

export default AddTags;
