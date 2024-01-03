import { Categories } from "~/components/Categories";
import { RandomArticles } from "~/components/RandomArticles";

import { ArticlesDataContext } from "~/App";
import { useContext } from "react";
import clsx from "clsx";

import styles from "./HomePage.module.scss";
import { ListMultiPages } from "~/components/ListMultiPages";
import RepetitionPage from "~/features/roteLearning/pages/RepetitionPage/RepetitionPage";

HomePage.propTypes = {};

function HomePage({ className }) {
  const { articles } = useContext(ArticlesDataContext);
  const sortedArticles = [...articles].sort((a, b) => {
    const dateA =
      a.createdAt instanceof Date ? a.createdAt : new Date(a.createdAt);
    const dateB =
      b.createdAt instanceof Date ? b.createdAt : new Date(b.createdAt);

    return dateB - dateA;
  });

  return (
    <div className={clsx(className, styles.wrapper)}>
      <div className={clsx(styles.main)}>
        <RepetitionPage className={clsx(styles.repetition)} />
        <div className={clsx(styles.newArticles)}>
          <h1>New Articles</h1>
          <ListMultiPages list={sortedArticles} articlePerPage={5} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
