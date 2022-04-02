import Services from "components/services/Services";
import React from "react";
import BreadCrumbs from "components/breadcrumbs/breadcrumbs";
import LatestNews from "components/latest-news/latest-news";
import Events from "components/events/Events";
import Votes from "components/votes/Votes";

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
