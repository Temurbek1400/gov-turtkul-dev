import Services from "components/services/services";
import React from "react";
import BreadCrumbs from "components/breadcrumbs/breadcrumbs";
import LatestNews from "components/latest-news/latest-news";
import Events from "components/events/events";
import Votes from "components/votes/votes";

const Home = () => {
  return (
    <div>
      <LatestNews />
      <BreadCrumbs />
      <Events />
      <Services />
      <Votes />
    </div>
  );
};

export default Home;
