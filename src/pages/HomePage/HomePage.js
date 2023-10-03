import { Categories } from "~/components/Categories";
import { RandomArticles } from "~/components/RandomArticles";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <main>
      <RandomArticles numberOfArticles={3} />
      <Categories />
    </main>
  );
}

export default HomePage;
