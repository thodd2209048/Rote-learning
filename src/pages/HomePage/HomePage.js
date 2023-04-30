import { Categories } from "~/components/Categories";
import { RandomArticles } from "~/components/RandomArticles";
import { articlesData as data } from "~/data/data";
import { useLocation } from "react-router-dom";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <main>
      <RandomArticles numberOfArticles={3} originData={data} />
      <Categories />
    </main>
  );
}

export default HomePage;
