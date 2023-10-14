import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Article.module.scss";
import Tag from "~/components/TagComponents/Tag/Tag";
import axios from "axios";
import RadioInput from "~/components/InputComponent/RadioInput/RadioInput";
import Button from "~/components/Button/Button";
import { ArticlesDataContext } from "~/App";
import { Link, useNavigate } from "react-router-dom";

Article.propTypes = {};

function Article({ className, article }) {
  const classes = clsx(className, styles.wrapper);
  const navigate = useNavigate();
  const [repetition, setRepetition] = useState(article.repetition);
  const [isUpdated, setIsUpdated] = useState(false);

  const { toggleFetchData } = useContext(ArticlesDataContext);

  const repetitionOptions = ["first reading", "1", "2", "3", "4", "completed"];

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

  useEffect(() => {
    setRepetition(article.repetition);
  }, [article]);

  return (
    <div className={classes}>
      <a href={article.link || article.url} target="_blank" rel="noreferrer">
        <h4 className={clsx(styles.title)}>{article.title}</h4>
      </a>
      <div className={clsx(styles.info)}>
        <span className={clsx(styles.static)}>ID: {article.id}</span>

        <span className={clsx(styles.static)}>subject: {article.subject}</span>

        <span className={clsx(styles.static)}>
          last time read: {article.lastTimeRead}
        </span>
        <span className={clsx(styles.static)}>
          repetition: {article.repetition}
        </span>

        {article.nextTimeRead && (
          <span className={clsx(styles.static)}>
            next time read: {article.nextTimeRead}
          </span>
        )}
      </div>

      <span className={clsx(styles.tags)}>
        {article.tags.map((tag, idx) => (
          <Tag key={idx} className={clsx(styles.tag)} tagName={tag}></Tag>
        ))}
      </span>

      <div className={clsx(styles.repetitionAndUpdate)}>
        <RadioInput
          className={clsx(styles.repetition)}
          value={repetition}
          onChangeValue={(value) => setRepetition(value)}
          options={repetitionOptions}
          id={`repetitionInput${article.id}`}
        />
        <div className={clsx(styles.update)}>
          {isUpdated && <span>Updated</span>}
          <Button callToAction={true} onClick={editArticle}>
            Updated
          </Button>
          <Button onClick={() => navigate(`/edit?id=${article.id}`)}>
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Article;
