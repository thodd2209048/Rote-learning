import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./ArticleUpdateBtns.module.scss";
import { ArticlesDataContext } from "~/App";
import Button from "~/components/Button/Button";

ArticleUpdateBtns.propTypes = {
  className: PropTypes.string,
  repetition: PropTypes.string.isRequired,
  article: PropTypes.object.isRequired,
};

function ArticleUpdateBtns({ className, repetition, article }) {
  const classes = clsx(className, styles.wrapper);
  const [isUpdated, setIsUpdated] = useState(false);

  const { toggleFetchData } = useContext(ArticlesDataContext);
  const navigate = useNavigate();

  const editArticle = async () => {
    if (repetition !== null) {
      const res = await axios.put(
        `http://localhost:8080/api/article/updateRepetition/${article.id}`,
        { repetition: repetition }
      );
      if (!!res) {
        console.log(res);
        setIsUpdated(true);
        setTimeout(() => {
          setIsUpdated(false);
        }, 2000);
        toggleFetchData();
      }
    }
  };
  return (
    <div className={classes}>
      {isUpdated && <span>Updated</span>}
      <Button callToAction={true} onClick={editArticle}>
        Updated
      </Button>
      <Button onClick={() => navigate(`/edit?id=${article.id}`)}>Edit</Button>
    </div>
  );
}

export default ArticleUpdateBtns;
