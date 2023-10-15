import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import styles from "./EditArticlePage.module.scss";
import clsx from "clsx";
import axios from "axios";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import Article from "~/components/ArticleShow/ArticleWithButton/ArticleWithButton";
import ArticleInput from "~/components/InputComponent/ArticleInput/ArticleInput";
import Button from "~/components/Button/Button";
import TextInput from "~/components/InputComponent/TextInput/TextInput";
import EditMetaDataArticle from "./EditMetaDataArticle/EditMetaDataArticle";

EditArticlePage.propTypes = {
  className: PropTypes.string,
};

function EditArticlePage({ className }) {
  const classes = clsx(className, styles.wrapper);
  const location = useLocation();

  const [currentArticle, setCurrentArticle] = useState();
  const [message, setMessage] = useState("");
  const [isEditMetaData, setIsEditMetaData] = useState(false);
  const articleId = queryString.parse(location.search).id;

  const updateArticleInfo = async () => {
    try {
      const res = await axios.put(
        `http://localhost:8080/api/article/${articleId}`,
        currentArticle
      );
      if (res.status === 200) {
        setMessage("Update succeed");
        getArticle();
      } else {
        setMessage("Update failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getArticle = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/article/${articleId}`
      );
      if (res.status === 200) {
        setCurrentArticle(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticle();
  }, [articleId]);

  console.log(currentArticle);

  return (
    <div className={classes}>
      {!currentArticle ? (
        <p>Article not found</p>
      ) : (
        <>
          <Article article={currentArticle} />
          <ArticleInput
            article={currentArticle}
            setArticle={setCurrentArticle}
          />

          <EditMetaDataArticle
            isEditMetaData={isEditMetaData}
            setIsEditMetaData={setIsEditMetaData}
            article={currentArticle}
            setArticle={setCurrentArticle}
          />
          <br />
          <Button callToAction onClick={updateArticleInfo}>
            Update
          </Button>
        </>
      )}
      <span>{message}</span>
    </div>
  );
}

export default EditArticlePage;
