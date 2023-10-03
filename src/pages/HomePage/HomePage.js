import { Categories } from "~/components/Categories";
import { RandomArticles } from "~/components/RandomArticles";

import { ArticlesDataContext } from "~/App";
import { useContext } from "react";

HomePage.propTypes = {};

function HomePage(props) {
  const { articles } = useContext(ArticlesDataContext);
  return (
    <main>
      <RandomArticles numberOfArticles={3} originList={articles} />
      <Categories />
    </main>
  );
}

export default HomePage;
