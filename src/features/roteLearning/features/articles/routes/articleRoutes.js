import { DefaultLayout } from "~/layouts/DefaultLayout";
import { paths } from "./paths";

import AddArticle from "../pages/AddArticle/AddArticle";
import RepetitionPage from "../pages/RepetitionPage/RepetitionPage";
import ListArticles from "../pages/ListArticles/ListArticles";
import UpdateArticle from "../pages/UpdateArticle/UpdateArticle";

export const articleRoutes = [
  { path: paths.articles, component: ListArticles, layout: DefaultLayout },
  { path: paths.addArticle, component: AddArticle, layout: DefaultLayout },
  { path: paths.repetition, component: RepetitionPage, layout: DefaultLayout },
  {
    path: paths.updateArticleWithId,
    component: UpdateArticle,
    layout: DefaultLayout,
  },
];
