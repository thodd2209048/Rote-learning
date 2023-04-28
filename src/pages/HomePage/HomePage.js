import { Categories } from "./Categories";
import { RandomArticles } from "../../components/RandomArticles";
import { articlesData as data } from "~/data/data";
import { SortByTag } from "../SortByTag";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <div>
      <header>
        <h1>List of articles</h1>
      </header>
      <main>
        <RandomArticles numberOfArticles={3} originData={data} />
        <Categories />
        <p>{Math.random()}</p>
      </main>
    </div>
  );
}

export default HomePage;
