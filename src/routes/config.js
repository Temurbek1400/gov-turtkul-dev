import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
const Home = lazy(() => import("pages/home"));
const CityPage = lazy(() => import("pages/city-page"));
const Layout = lazy(() => import("pages/layout"));
const FilteredNews = lazy(() =>
   import("components/filtered-news/filtered-news")
);

const routes = [
<<<<<<< HEAD
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
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
=======
   {
      path: "/",
      element: <Layout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/news",
            element: <FilteredNews />,
         },
         {
            path: "*",
            element: <Navigate to="/" replace />,
         },
      ],
   },
>>>>>>> 44729a9943ee04ba647aebccea3b7ed63935f1a9
];

const Routes = () => {
   const elements = useRoutes(routes);
   return elements;
};
export default Routes;
