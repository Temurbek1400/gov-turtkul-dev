import navbarData from "./navbar-data";
import footerData from "./footer-data";
import {
  cityPlanData,
  commentsData,
  newsData,
  servicesData,
} from "./home-page-data";

const data = {
  uz: {
    navbar: navbarData.uz,
    footer: footerData.uz,
    homePageData: {
      services: servicesData.uz,
      comments: commentsData.uz,
      cityPlan: cityPlanData.uz,
      news: newsData.uz,
    },
  },
  ru: {
    navbar: navbarData.ru,
    footer: footerData.ru,
    homePageData: {
      services: servicesData.ru,
      comments: commentsData.ru,
      cityPlan: cityPlanData.ru,
      news: newsData.ru,
    },
  },
};

export default data;
