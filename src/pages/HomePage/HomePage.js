import React from "react";
import PropTypes from "prop-types";
import RandomQuote from "~/features/roteLearning/features/quotes/components/RandomQuote/RandomQuote";
import RepetitionArticle from "~/features/roteLearning/pages/RepetitionPage/RepetitionArticle/RepetitionArticle";
import RepetitionPage from "~/features/roteLearning/pages/RepetitionPage/RepetitionPage";

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
