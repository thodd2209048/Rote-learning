import React from "react";
import PropTypes from "prop-types";
import { RandomArticles } from "./RandomArticles";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <div>
      <h1>List of articles</h1>
      <RandomArticles numberOf={4} />
    </div>
  );
}

export default HomePage;
