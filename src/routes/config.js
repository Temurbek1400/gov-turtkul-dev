import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
const Home = lazy(() => import("pages/home"));
const NewsDetail = lazy(() => import("pages/news-detail"));
const Layout = lazy(() => import("pages/layout"));
const FilteredNews = lazy(() =>
  import("components/filtered-news/filtered-news")
);
const TemplateLayout = lazy(() => import("pages/template/template-layout"));

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
        path: "/news",
        element: <FilteredNews />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
      {
        path: "/",
        element: <TemplateLayout />,
        children: [
          {
            path: "/news/:newsId",
            element: <NewsDetail />,
          },
          {
            path: ":navbarRoutes/:navRoute",
            element: <NewsDetail />,
          },
          {
            path: ":navbarRoute",
            element: <NewsDetail />,
          },
        ],
      },
    ],
  },
];

const Routes = () => {
  const elements = useRoutes(routes);
  return elements;
};
export default Routes;
