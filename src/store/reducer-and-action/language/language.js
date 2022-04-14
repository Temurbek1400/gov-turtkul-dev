import { createSelector, createSlice } from "@reduxjs/toolkit";
import { useLocation } from "react-router-dom";
import data from "store/data/static-language-data";

const initialState = {
  languagesName: Object.keys(data),
  activeLanguage: data.uz,
  activeLanguageName: "uz",
  drawer: false,
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.activeLanguage = data[action.payload];
      state.activeLanguageName = action.payload;
    },
    toggleDrawerRedux(state, action) {
      state.drawer = action.payload;
    },
  },
});

export const { setLanguage, toggleDrawerRedux } = languageSlice.actions;

export const getNavbarData = createSelector(
  (state) => state.language.activeLanguage,
  (activeLanguage) => activeLanguage.navbar
);
export const getFilterBarData = createSelector(
  (state) => state.language.activeLanguage,
  (activeLanguage) => {
    const { list } = activeLanguage.navbar.find((item) => item.link === "news");
    return list;
  }
);
export const getFooterData = createSelector(
  (state) => state.language.activeLanguage,
  (activeLanguage) => activeLanguage.footer
);

export const getLanguagesName = createSelector(
  (state) => state.language,
  (language) => language.languagesName
);
export const getActiveLanguageName = createSelector(
  (state) => state.language,
  (language) => language.activeLanguageName
);
export const getHomePageData = createSelector(
  (state) => state.language.activeLanguage,
  (activeLanguage) => activeLanguage.homePageData
);
export const getDrawerStatus = createSelector(
  (state) => state.language,
  (language) => language.drawer
);
export default languageSlice.reducer;

export const getCurrentRoutes = createSelector(
  (state) => state.language.activeLanguage,
  ({ navbar }) => {
    const { pathname } = window.location;
    const currentList = navbar.find((part) => pathname.includes(part.link));
    const secondOrderRoute = currentList.list.find(({ route }) =>
      pathname.includes(route)
    );
    const routes = [
      { title: currentList.head, route: currentList.link },
      secondOrderRoute,
      ...pathname
        .split("/")
        .filter(
          (item) =>
            currentList.link !== item &&
            secondOrderRoute.route !== item &&
            item !== ""
        )
        .map((item) => ({ route: item })),
    ];
    console.log(routes);
    return routes;
  }
);
