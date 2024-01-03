import { Categories } from "~/components/Categories";
import { RandomArticles } from "~/components/RandomArticles";

import { ArticlesDataContext } from "~/App";
import { useContext } from "react";
import clsx from "clsx";

import styles from "./RandomPage.module.scss";

RandomPage.propTypes = {};

function RandomPage({ className }) {
  const { articles } = useContext(ArticlesDataContext);
  return (
    <div className={clsx(className, styles.wrapper)}>
      <RandomArticles
        className={clsx(styles.random)}
        numberOfArticles={5}
        originList={articles}
      />
      <Categories className={clsx("container")} />
    </div>
  );
}

export default RandomPage;
