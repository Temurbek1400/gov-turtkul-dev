import { combineReducers } from "@reduxjs/toolkit";
import languageSlice from "./language/language";
import newsSlice from "./news/newsSlice";

export default combineReducers({
   language: languageSlice,
   news: newsSlice,
});
