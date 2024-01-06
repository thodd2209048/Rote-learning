//Public routes

import { DefaultLayout } from "~/layouts/DefaultLayout";
import { AddArticle } from "~/features/roteLearning/pages/AddArticle";
import HomePage from "~/pages/HomePage/HomePage";
import RepetitionArticle from "~/features/roteLearning/pages/RepetitionPage/RepetitionPage";
import UpdateArticle from "~/features/roteLearning/pages/UpdateArticle/UpdateArticle";
import ListArticles from "~/features/roteLearning/pages/ListArticles/ListArticles";

const publicRoutes = [
  { path: "/", component: HomePage, layout: DefaultLayout },
  { path: "/addArticle", component: AddArticle, layout: DefaultLayout },
  {
    path: "/repetition",
    component: RepetitionArticle,
    layout: DefaultLayout,
  },
  {
    path: "/article-update/:id",
    component: UpdateArticle,
    layout: DefaultLayout,
  },
  {
    path: "/articles",
    component: ListArticles,
    layout: DefaultLayout,
  },
];

//Private routes

export { publicRoutes };
