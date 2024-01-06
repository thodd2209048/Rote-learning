import { DefaultLayout } from "~/layouts/DefaultLayout";
import AddQuote from "../pages/AddQuote/AddQuote";

export const quoteRoutes = [
  {
    path: "/add-quote",
    component: AddQuote,
    layout: DefaultLayout,
  },
];
