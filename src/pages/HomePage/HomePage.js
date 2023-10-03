import { Categories } from "~/components/Categories";
import { RandomArticles } from "~/components/RandomArticles";

import { ArticlesDataContext } from "~/App";
import { useContext } from "react";
import clsx from "clsx";

import styles from "./HomePage.module.scss";

HomePage.propTypes = {};

function HomePage({ className }) {
  const { articles } = useContext(ArticlesDataContext);
  return (
    <div className={clsx(className, styles.wrapper)}>
      <RandomArticles
        className={clsx(styles.random)}
        numberOfArticles={5}
        originList={articles}
      />
      <Categories />
    </div>
  );
}

export default HomePage;
