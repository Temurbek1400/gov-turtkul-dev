import { getData } from "api/operations";
import { useSelector } from "react-redux";
import { getActiveLanguageName } from "../language/language";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  events: [],
  pending: false,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.pending = false;
      state.events = action.payload.data;
    });
    builder.addCase(fetchEvents.pending, (state, action) => {
      state.pending = true;
    });
    // builder.addCase(fetchEvents.rejected, (state, action) => {
    //   state.errorMessage = action.payload;
    // });
  },
});

export const fetchEvents = createAsyncThunk(
  "events/data",
  async (currLanguage) => {
    return await getData(`/${currLanguage}/events`);
  }
);

export default eventsSlice.reducer;
