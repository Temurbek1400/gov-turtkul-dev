import AskedQuestions from "components/asked-questions/asked-questions";
import SeniorMenegment from "pages/senior-menegment";
import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
const Home = lazy(() => import("pages/home"));
const NewsDetail = lazy(() => import("pages/news-detail"));
const Layout = lazy(() => import("pages/layout"));
const FilteredNews = lazy(() =>
  import("components/filtered-news/filtered-news")
);
const DefaultPage = lazy(() => import("pages/default-page"));
const DefaultRoute = lazy(() => import("pages/default-route"));
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
        path: "/about/about-gov",
        element: <SeniorMenegment />,
      },
      {
        path: "/questions",
        element: <AskedQuestions />,
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
            path: "/news/all-news/:newsId",
            element: <NewsDetail />,
          },
          {
            path: ":navbarRoutes/:navRoute",
            element: <DefaultRoute />,
          },
          {
            path: ":navbarRoutes",
            element: <DefaultPage />,
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
