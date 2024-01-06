//Public routes

import { DefaultLayout } from "~/layouts/DefaultLayout";
import { AddArticle } from "~/features/roteLearning/pages/AddArticle";
import HomePage from "~/pages/HomePage/HomePage";
import RepetitionArticle from "~/features/roteLearning/pages/RepetitionPage/RepetitionPage";
import UpdateArticle from "~/features/roteLearning/pages/UpdateArticle/UpdateArticle";
import ListArticles from "~/features/roteLearning/pages/ListArticles/ListArticles";
import { quoteRoutes } from "~/features/roteLearning/features/quotes/routes/routes";
import { adminRoutes } from "~/features/roteLearning/features/admin/routes/routes";

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
  ...quoteRoutes,
  ...adminRoutes,
];

//Private routes

export { publicRoutes };
