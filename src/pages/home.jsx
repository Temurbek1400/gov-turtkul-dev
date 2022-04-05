import Services from "components/services/services";
import React from "react";
import BreadCrumbs from "components/breadcrumbs/breadcrumbs";
import LatestNews from "components/latest-news/latest-news";
import Events from "components/events/events";
import Votes from "components/votes/votes";
import City from "components/city/city";
import Resourses from "components/resourses/resourses";

const Home = () => {
  return (
    <div>
      <LatestNews />
      <BreadCrumbs />
      <Events />
      <Services />
      <Votes />
      <City />
      <Resourses />
    </div>
  );
};

export default Home;
