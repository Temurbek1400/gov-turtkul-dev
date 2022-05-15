import { getData, postData } from "api/operations";
import { toast } from "react-hot-toast";

const {
  createSlice,
  createAsyncThunk,
  createSelector,
} = require("@reduxjs/toolkit");

const initialState = {
  votes: [],
  errorMessage: "",
  pending: false,
  votedSuccess: false,
  cantVote: false,
};

const votesSlice = createSlice({
  name: "votes",
  initialState,
  reducers: {
    votedSuccess: (state, action) => {
      state.votedSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVotes.fulfilled, (state, action) => {
      state.pending = false;
      state.votes = action.payload;
      state.votedSuccess = true;
    });
    builder.addCase(fetchVotes.pending, (state, action) => {
      state.pending = true;
    });
    builder.addCase(fetchVotes.rejected, (state, action) => {
      state.errorMessage = action.payload;
    });
    builder.addCase(postVote.fulfilled, (state, action) => {
      debugger;
      toast.success("Ovoz berildi!");
    });
    builder.addCase(postVote.pending, (state, action) => {});
    builder.addCase(postVote.rejected, (state, action) => {
      debugger;
      toast.success("Siz allaqachon ovoz bergansiz!");
    });
  },
});

export const fetchVotes = createAsyncThunk("/vote", async () => {
  const { data } = await getData("/vote");
  return data;
});

export const postVote = createAsyncThunk("/get-vote", async (vote) => {
  const { data } = await postData("/get-vote/", vote);
  return data;
});

export const getVotes = createSelector(
  (state) => state,
  ({ votes }) => votes.votes
);

export default votesSlice.reducer;
