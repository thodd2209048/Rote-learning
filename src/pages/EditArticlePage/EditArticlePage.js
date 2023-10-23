import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import queryString from "query-string";
import clsx from "clsx";

import { useLocation } from "react-router-dom";
import Button from "~/components/Button/Button";
import ArticleInput from "~/components/InputComponent/ArticleInput/ArticleInput";
import { readArticle, updateArticle } from "~/services/ApiServices";
import styles from "./EditArticlePage.module.scss";
import EditMetaDataArticle from "./EditMetaDataArticle/EditMetaDataArticle";
import Article from "~/components/Article/Article";

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
    const succeed = await updateArticle(articleId, currentArticle);
    if (succeed) {
      setMessage("Update succeed");
      getArticle();
    } else {
      setMessage("Update failed");
    }
  };

  const getArticle = async () => {
    const articleData = await readArticle(articleId);
    setCurrentArticle(articleData);
  };

  useEffect(() => {
    getArticle();
  }, [articleId]);

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
