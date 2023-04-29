//Public routes

import { DefaultLayout } from "~/layouts/DefaultLayout";

const { HomePage } = require("~/pages/HomePage");

const publicRoutes = [
  { path: "/", component: HomePage, layout: DefaultLayout },
];

//Private routes

export { publicRoutes };
