import { combineReducers } from "@reduxjs/toolkit";
import languageSlice from "./language/language";

export default combineReducers({
  language: languageSlice,
});
