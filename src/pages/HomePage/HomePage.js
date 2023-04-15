import { RandomArticles } from "./RandomArticles";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <div>
      <h1>List of articles</h1>
      <RandomArticles numberOfArticles={3} />
    </div>
  );
}

export default HomePage;
