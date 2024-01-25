import RepetitionPage from "~/features/roteLearning/features/articles/pages/RepetitionPage/RepetitionPage";
import RandomQuote from "~/features/roteLearning/features/quotes/components/RandomQuote/RandomQuote";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <div>
      <RandomQuote />
      <RepetitionPage />
    </div>
  );
}

export default HomePage;
