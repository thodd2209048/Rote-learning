import { Categories } from "~/components/Categories";
import { RandomArticles } from "~/components/RandomArticles";
import { articlesData as data } from "~/data/data";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
