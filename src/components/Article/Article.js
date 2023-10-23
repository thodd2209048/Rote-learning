import clsx from "clsx";
import { useEffect, useState } from "react";

import RadioInput from "~/components/InputComponent/RadioInput/RadioInput";
import Tag from "~/components/TagComponents/Tag/Tag";
import ArticleUpdateBtns from "./UpdateBtns/UpdateBtns";
import styles from "./Article.module.scss";
import { repetitionOptions } from "~/utils/constants";
import { images } from "~/assets/Images/images";

Article.propTypes = {};

function Article({ className, article, updateBtns }) {
  const [repetition, setRepetition] = useState(article.repetition);

  useEffect(() => {
    setRepetition(article.repetition);
  }, [article]);

  return (
    <div className={clsx(className)}>
      <h4>
        <a
          // className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
          href={article.link || article.url}
          target="_blank"
          rel="noreferrer"
        >
          {article.title}
        </a>
      </h4>
      <div className="d-flex flex-row flex-wrap">
        <span className={clsx(styles.static)}>ID: {article.id}</span>

        <span className={clsx(styles.static)}>
          {/* <img className={clsx(styles.icon)} src={images.subject} alt="" />{" "} */}
          {article.subject}
        </span>

        <span className={clsx(styles.static)}>
          last time read: {article.lastTimeRead}
        </span>
        {!!article.repetition && (
          <span className={clsx(styles.static)}>
            repetition: {article.repetition}
          </span>
        )}

        {!!article.nextTimeRead && (
          <span className={clsx(styles.static)}>
            next time read: {article.nextTimeRead}
          </span>
        )}
      </div>

      {/* <span>
        {article.tags.map((tag, idx) => (
          <Tag
            key={idx}
            className={"badge bg-secondary me-1"}
            tagName={tag}
          ></Tag>
        ))}
      </span> */}

      <div className="d-flex flex-row mt-1 justify-content-between">
        <RadioInput
          value={repetition}
          onChangeValue={(value) => setRepetition(value)}
          options={repetitionOptions}
          id={`repetitionInput${article.id}`}
        />
        {updateBtns && (
          <ArticleUpdateBtns repetition={repetition} article={article} />
        )}
      </div>
    </div>
  );
}

export default Article;
