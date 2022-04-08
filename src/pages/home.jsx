import Services from "components/services/services";
import React from "react";
import BreadCrumbs from "components/breadcrumbs/breadcrumbs";
import LatestNews from "components/latest-news/latest-news";
import Events from "components/events/events";
import Votes from "components/votes/votes";
import City from "components/city/city";
import Resourses from "components/resourses/resourses";
import { useSelector } from "react-redux";
import { getHomePageData } from "store/reducer-and-action/language/language";

const Home = () => {
  const homePageData = useSelector(getHomePageData);
  return (
    <div>
      <LatestNews news={homePageData.news} plan={homePageData.cityPlan} />
      <BreadCrumbs />
      <Events />
      <Services
        services={homePageData.services}
        comments={homePageData.comments}
      />
      <Votes />
      <City />
      <Resourses />
    </div>
  );
};

export default Home;
