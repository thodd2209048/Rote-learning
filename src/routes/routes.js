//Public routes

import { DefaultLayout } from "~/layouts/DefaultLayout";
import { AddArticle } from "~/pages/AddArticle";
import EditArticlePage from "~/pages/EditArticlePage/EditArticlePage";
import { FilterPage } from "~/pages/FilterPage";
import { HomePage } from "~/pages/HomePage";
import RandomPage from "~/pages/RandomPage/RandomPage";
import RepetitionPage from "~/pages/RepetitionPage/RepetitionPage";
import { SortByTag } from "~/pages/SortByTag";

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
