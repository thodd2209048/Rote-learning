import { Categories } from "./Categories";
import { RandomArticles } from "../../components/RandomArticles";
import { articlesData as data } from "~/data/data";
import { SortByTag } from "../SortByTag";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <main>
      <RandomArticles numberOfArticles={3} originData={data} />
      <Categories />
      <p>{Math.random()}</p>
      {/* <SortByTag selectedTag="front-end" /> */}
    </main>
  );
}

export default HomePage;
