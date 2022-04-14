import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  activeFilter: "all",
  news: {},
  errorMessage: "",
  pending: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setActiveFilter(state, action) {
      state.activeFilter = action.payload;
      state.pending = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      if (action.payload?.data)
        state.news = {
          ...state.news,
          [action.payload?.activeLanguageName]: {
            ...state.news[action.payload?.activeLanguageName],
            [state.activeFilter]: action.payload?.data,
          },
        };
    });
    builder.addCase(fetchNews.pending, (state, action) => {
      state.pending = true;
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.errorMessage = action.payload;
    });
  },
});

export const fetchNews = createAsyncThunk(
  "news/fetchByFilter",
  async (filter, thunkAPI) => {
    const {
      language: { activeLanguageName },
      news: { news, activeFilter },
    } = thunkAPI.getState();
    if (news?.[activeLanguageName]?.[activeFilter]) {
      thunkAPI.dispatch(setActiveFilter(filter));
      return;
    }
    const response = await fetch(
      `https://turtkul_gov/${activeLanguageName}/news/${filter}`
    );
    thunkAPI.dispatch(setActiveFilter(filter));
    const data = await response.json();
    return { activeLanguageName, data };
  }
);

export const getNewsData = createSelector(
  (state) => state,
  ({ language: { activeLanguageName }, news: { activeFilter, news } }) =>
    news?.[activeLanguageName]?.[activeFilter]
);

export const getActiveFilter = createSelector(
  (state) => state.news,
  (news) => news.activeFilter
);
export const getNewsStatus = createSelector(
  (state) => state.news,
  (news) => news.pending
);

export const { setActiveFilter } = newsSlice.actions;

export default newsSlice.reducer;
