import { DefaultLayout } from "~/layouts/DefaultLayout";
import Admin from "../pages/Admin/Admin";
import { paths } from "./paths";

export const adminRoutes = [
  { path: paths.admin, component: Admin, layout: DefaultLayout },
];
