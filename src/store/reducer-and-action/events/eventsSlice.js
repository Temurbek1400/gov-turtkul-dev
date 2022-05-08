import { getData } from "api/operations";

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

export const fetchEvents = createAsyncThunk("/uz/events", async () => {
  return await getData("/uz/events");
});

export default eventsSlice.reducer;
