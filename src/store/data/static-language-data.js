import navbarData from "./navbar-data";
import footerData from "./footer-data";
import {
  cityData,
  cityPlanData,
  commentsData,
  eventsData,
  newsData,
  resoursesData,
  servicesData,
  votesData,
} from "./home-page-data";

const data = {
  uz: {
    navbar: navbarData.uz,
    footer: footerData.uz,
    homePageData: {
      services: servicesData.uz,
      events: eventsData.uz,
      comments: commentsData.uz,
      cityPlan: cityPlanData.uz,
      news: newsData.uz,
      votes: votesData.uz,
      city: cityData.uz,
      resourses: resoursesData.uz,
    },
  },
  ru: {
    navbar: navbarData.ru,
    footer: footerData.ru,
    homePageData: {
      services: servicesData.ru,
      events: eventsData.ru,
      comments: commentsData.ru,
      cityPlan: cityPlanData.ru,
      news: newsData.ru,
      votes: votesData.ru,
      city: cityData.ru,
      resourses: resoursesData.ru,
    },
  },
};

export default data;
