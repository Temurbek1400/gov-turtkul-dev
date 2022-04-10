import { createSelector, createSlice } from "@reduxjs/toolkit";
import data from "store/data/static-language-data";

const initialState = {
   languagesName: Object.keys(data),
   activeLanguage: data.uz,
   activeLanguageName: "uz",
};

const languageSlice = createSlice({
   name: "language",
   initialState,
   reducers: {
      setLanguage(state, action) {
         state.activeLanguage = data[action.payload];
         state.activeLanguageName = action.payload;
      },
   },
});

export const { setLanguage } = languageSlice.actions;

export const getNavbarData = createSelector(
   (state) => state.language.activeLanguage,
   (activeLanguage) => activeLanguage.navbar
);
export const getFilterBarData = createSelector(
   (state) => state.language.activeLanguage,
   (activeLanguage) => activeLanguage.filterBar
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

export default languageSlice.reducer;
