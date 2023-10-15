import clsx from "clsx";
import { useEffect, useState } from "react";

import RadioInput from "~/components/InputComponent/RadioInput/RadioInput";
import Tag from "~/components/TagComponents/Tag/Tag";
import ArticleUpdateBtns from "./ArticleUpdateBtns/ArticleUpdateBtns";
import styles from "./ArticleWithButton.module.scss";
import { repetitionOptions } from "~/utils/constants";

ArticleWithButton.propTypes = {};

function ArticleWithButton({ className, article, updateBtns }) {
  const classes = clsx(className, styles.wrapper);
  const [repetition, setRepetition] = useState(article.repetition);

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
        {updateBtns && (
          <ArticleUpdateBtns
            className={clsx(styles.update)}
            repetition={repetition}
            article={article}
          />
        )}
      </div>
    </div>
  );
}

export default ArticleWithButton;
