import { combineReducers } from "@reduxjs/toolkit";
import eventsSlice from "./events/eventsSlice";
import helpersSlice from "./helpers/helpers";
import languageSlice from "./language/language";
import newsSlice from "./news/newsSlice";
import supportsSlice from "./supports/supportsSlice";
import votesSlice from "./votes/votesSlice";

export default combineReducers({
  language: languageSlice,
  news: newsSlice,
  helpers: helpersSlice,
  events: eventsSlice,
  votes: votesSlice,
  supports: supportsSlice,
});
