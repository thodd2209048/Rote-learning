import React from "react";
import PropTypes from "prop-types";

import styles from "./EditMetaDataArticle.module.scss";
import Button from "~/components/Button/Button";
import TextInput from "~/components/InputComponent/TextInput/TextInput";
import clsx from "clsx";

EditMetaDataArticle.propTypes = {};

function EditMetaDataArticle({
  className,
  isEditMetaData,
  setIsEditMetaData,
  article,
  setArticle,
}) {
  const classes = clsx(className, styles.wrapper);

  const toggleEdit = () => {
    setIsEditMetaData(isEditMetaData ? false : true);
  };

  const handleInputChange = (value, field) => {
    console.log(value, field);
    setArticle({
      ...article,
      [field]: value,
    });
  };
  return (
    <div className={classes}>
      <Button className={clsx(styles.btnMore)} onClick={toggleEdit}>
        {isEditMetaData ? "less" : "more"}
      </Button>
      {isEditMetaData ? (
        <TextInput
          placeholder={"2023-10-11T07:30:45.123Z"}
          value={article.createdAt}
          label={"Created At"}
          onChangeValue={(value) => handleInputChange(value, "createdAt")}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default EditMetaDataArticle;
