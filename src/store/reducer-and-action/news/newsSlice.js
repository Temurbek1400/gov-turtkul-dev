import {
   createAsyncThunk,
   createSelector,
   createSlice,
} from "@reduxjs/toolkit";

const initialState = {
   activeFilter:'',
   news: [],
   errorMessage: "",
   pending: false,
};

const newsSlice = createSlice({
   name: "news",
   initialState,
   reducers: {
      setActiveFilter(state,action){
         state.activeFilter=action.payload
      }
   },
   extraReducers: (builder) => {
      builder.addCase(fetchNews.fulfilled, (state, action) => {
         state.news=[action.payload]
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
      const {language:{activeLanguageName}}=thunkAPI.getState()
      const response = await fetch(`https://turtkul_gov/news/${activeLanguageName}/${filter}`);
      thunkAPI.dispatch(setActiveFilter(filter))
      return await response.json();
   }
);

export const getNewsData = createSelector(
   (state) => state.news,
   (news) => news.news
);
export const getActiveFilter = createSelector(
   (state) => state.news,
   (news) => news.activeFilter
);

export const { setActiveFilter} = newsSlice.actions;

export default newsSlice.reducer;
