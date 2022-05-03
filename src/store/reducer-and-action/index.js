import { combineReducers } from "@reduxjs/toolkit";
import helpersSlice from "./helpers/helpers";
import languageSlice from "./language/language";
import newsSlice from "./news/newsSlice";

export default combineReducers({
  language: languageSlice,
  news: newsSlice,
  helpers: helpersSlice,
});
