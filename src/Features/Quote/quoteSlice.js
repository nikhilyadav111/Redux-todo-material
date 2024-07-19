import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quoteData: {
      isLoading:false,
      isError:false,
      quoteData:null,
    },
  },
  reducer: {},
  extraReducers:(bulider)=>{
    bulider
      .addCase(fetchQuote.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.quoteData = null;
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.quoteData = action.payload;
      })
      .addCase(fetchQuote.rejected,(state,action)=>{
        state.isLoading=false;
        state.isError=true;
        state.quoteData=null;

    })
  }
});
export default quoteSlice.reducer;
// api data fetch
export const fetchQuote = createAsyncThunk("FETCH/QUOTE", async () => {
  const response = await fetch("https://quotable.io/random");
  const data = await response.json();
  return data;
});
