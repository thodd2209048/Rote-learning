//Public routes

import { DefaultLayout } from "~/layouts/DefaultLayout";
import { AddArticle } from "~/features/roteLearning/pages/AddArticle";
import { FilterPage } from "~/features/roteLearning/pages/FilterPage";
import { HomePage } from "~/pages/HomePage";
import RandomPage from "~/features/roteLearning/pages/RandomPage/RandomPage";

import EditArticlePage from "~/features/roteLearning/pages/EditArticlePage/EditArticlePage";
import { SortByTag } from "~/features/roteLearning/pages/SortByTag";
import RepetitionPage from "~/features/roteLearning/pages/RepetitionPage/RepetitionPage";

const publicRoutes = [
  { path: "/", component: HomePage, layout: DefaultLayout },
  { path: "/sortByTag", component: SortByTag, layout: DefaultLayout },
  { path: "/addArticle", component: AddArticle, layout: DefaultLayout },
  { path: "/filter", component: FilterPage, layout: DefaultLayout },
  { path: "/repetition", component: RepetitionPage, layout: DefaultLayout },
  { path: "/random", component: RandomPage, layout: DefaultLayout },
  { path: "/edit", component: EditArticlePage, layout: DefaultLayout },
];

//Private routes

export { publicRoutes };
