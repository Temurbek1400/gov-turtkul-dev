import navbarData from "./navbar-data";
import footerData from "./footer-data";
import { commentsData, servicesData } from "./home-page-data";
const data = {
  uz: {
    navbar: navbarData.uz,
    footer: footerData.uz,
    homePageData: {
      services: servicesData.uz,
      comments: commentsData.uz,
    },
  },
  ru: {
    navbar: navbarData.ru,
    footer: footerData.ru,
    homePageData: {
      services: servicesData.ru,
      comments: commentsData.ru,
    },
  },
};

export default data;
