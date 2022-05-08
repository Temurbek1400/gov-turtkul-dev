import { getData, postData } from "api/operations";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  votes: [],
  errorMessage: "",
  pending: false,
};

const votesSlice = createSlice({
  name: "votes",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchVotes.fulfilled, (state, action) => {
      state.pending = false;
      state.votes = action.payload;
    });
    builder.addCase(fetchVotes.pending, (state, action) => {
      state.pending = true;
    });
    builder.addCase(fetchVotes.rejected, (state, action) => {
      state.errorMessage = action.payload;
    });
  },
});

export const fetchVotes = createAsyncThunk("/vote", async () => {
  const { data } = await getData("/vote");
  return data;
});

export const postVote = createAsyncThunk("/get-vote", async (vote) => {
  await postData("/get-vote/", vote);
});

export default votesSlice.reducer;
