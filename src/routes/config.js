import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

const Home = lazy(() => import("pages/home"));
const Layout = lazy(() => import("pages/layout"));

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
];

const Routes = () => {
  const elements = useRoutes(routes);
  return elements;
};
export default Routes;
