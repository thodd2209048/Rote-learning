//Public routes

import { DefaultLayout } from "~/layouts/DefaultLayout";
import { HomePage } from "~/pages/HomePage";
import { SortByTag } from "~/pages/SortByTag";

const publicRoutes = [
  { path: "/", component: HomePage, layout: DefaultLayout },
  { path: "/sortByTag", component: SortByTag, layout: DefaultLayout },
];

//Private routes

export { publicRoutes };
