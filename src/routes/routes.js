//Public routes

import { DefaultLayout } from "~/layouts/DefaultLayout";
import { AddArticle } from "~/pages/AddArticle";
import { FilterPage } from "~/pages/FilterPage";
import { HomePage } from "~/pages/HomePage";
import { SortByTag } from "~/pages/SortByTag";

const publicRoutes = [
  { path: "/", component: HomePage, layout: DefaultLayout },
  { path: "/sortByTag", component: SortByTag, layout: DefaultLayout },
  { path: "/addArticle", component: AddArticle, layout: DefaultLayout },
  { path: "/filter", component: FilterPage, layout: DefaultLayout },
];

//Private routes

export { publicRoutes };
