import { DefaultLayout } from "~/layouts/DefaultLayout";
import Admin from "../pages/Admin/Admin";

export const adminRoutes = [
  { path: "/admin", component: Admin, layout: DefaultLayout },
];
