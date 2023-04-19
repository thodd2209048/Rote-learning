import { Categories } from "./Categories";
import { RandomArticles } from "./RandomArticles";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <div>
      <header>
        <h1>List of articles</h1>
      </header>
      <main>
        <RandomArticles numberOfArticles={3} />
        <Categories />
      </main>
    </div>
  );
}

export default HomePage;
