import React from "react";
import PropTypes from "prop-types";

import styles from "./ArticleInput.module.scss";
import clsx from "clsx";
import TextInput from "../TextInput/TextInput";
import TagsInput from "../TagsInput/TagsInput";
import RadioInput from "../RadioInput/RadioInput";

ArticleInput.propTypes = {
  className: PropTypes.string,
};

function ArticleInput({ className, article, setArticle }) {
  const classes = clsx(className, styles.wrapper);

  const statusOptions = ["in_progress", "completed"];
  const repetitionOptions = ["first reading", "1", "2", "3", "4", "completed"];
  const typeOptions = ["article", "video", "note"];

  const handleInputChange = (value, field) => {
    setArticle({
      ...article,
      [field]: value,
    });
  };
  return (
    <div className={classes}>
      <div className={clsx(styles.formField)}>
        <TextInput
          value={article.url}
          onChangeValue={(value) => handleInputChange(value, "url")}
          label={"URL:"}
          placeholder="http://"
          id={"urlInput"}
        />
      </div>

      <div className={clsx(styles.formField)}>
        <TextInput
          value={article.title}
          onChangeValue={(value) => handleInputChange(value, "title")}
          label={"Title:"}
          id={"titleInput"}
        />
      </div>

      <div className={clsx(styles.formField)}>
        <TextInput
          value={article.subject}
          onChangeValue={(value) => handleInputChange(value, "subject")}
          label={"Subject:"}
          id={"subjectInput"}
        />
      </div>

      <div className={clsx(styles.formField)}>
        <TextInput
          value={article.series}
          onChangeValue={(value) => handleInputChange(value, "series")}
          label={"Series:"}
          id={"seriesInput"}
        />
      </div>

      <div className={clsx(styles.formField)}>
        <TagsInput
          tags={article.tags}
          onChangeValue={(value) => handleInputChange(value, "tags")}
        />
      </div>

      <div className={clsx(styles.formField)}>
        <RadioInput
          label={"Type:"}
          value={article.type}
          onChangeValue={(value) => handleInputChange(value, "type")}
          options={typeOptions}
          id={"typeInput"}
        />
      </div>

      <div className={clsx(styles.formField)}>
        <RadioInput
          label={"Status:"}
          value={article.status}
          onChangeValue={(value) => handleInputChange(value, "status")}
          options={statusOptions}
          id={"statusInput"}
        />
      </div>

      <div className={clsx(styles.formField)}>
        <RadioInput
          label={"Repetition:"}
          value={article.repetition}
          onChangeValue={(value) => handleInputChange(value, "repetition")}
          options={repetitionOptions}
          id={"repetitionInput"}
        />
      </div>
    </div>
  );
}

export default ArticleInput;
