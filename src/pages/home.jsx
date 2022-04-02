import LatestNews from "../components/latest-news/latest-news";
import Services from "../components/services/Services";
import React from "react";
import Events from "components/events/Events";
import Votes from "components/votes/Votes";

const Home = () => {
  return (
    <div>
      <LatestNews />
      <Events />
      {/* <Services />
      <Votes /> */}
    </div>
  );
};

export default Home;
