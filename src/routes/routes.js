//Public routes

import { DefaultLayout } from "~/layouts/DefaultLayout";
import { AddArticle } from "~/pages/AddArticle";
import { HomePage } from "~/pages/HomePage";
import { SortByTag } from "~/pages/SortByTag";

const publicRoutes = [
  { path: "/", component: HomePage, layout: DefaultLayout },
  { path: "/sortByTag", component: SortByTag, layout: DefaultLayout },
  { path: "/addArticle", component: AddArticle, layout: DefaultLayout },
];

//Private routes

export { publicRoutes };
