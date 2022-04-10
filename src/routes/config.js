import SeniorMenegment from "pages/senior-menegment";
import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

const Home = lazy(() => import("pages/home"));
const CityPage = lazy(() => import("pages/city-page"));
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
        path: "/home",
        element: <Home />,
      },
      {
        path: "/city-page",
        element: <CityPage />,
      },
      {
        path: "/senior-menegment",
        element: <SeniorMenegment />,
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
