//Public routes

import { adminRoutes } from "~/features/roteLearning/features/admin/routes/routes";
import { articleRoutes } from "~/features/roteLearning/features/articles/routes/articleRoutes";
import { quoteRoutes } from "~/features/roteLearning/features/quotes/routes/routes";
import { DefaultLayout } from "~/layouts/DefaultLayout";
import HomePage from "~/pages/HomePage/HomePage";

const publicRoutes = [
  { path: "/", component: HomePage, layout: DefaultLayout },
  ...articleRoutes,
  ...quoteRoutes,
  ...adminRoutes,
];

//Private routes

export { publicRoutes };
