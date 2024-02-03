import { createSlice } from '@reduxjs/toolkit';
import { fetchNotices } from './noticesOperations';

export const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    noticesData: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder.addCase(fetchNotices.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchNotices.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.noticesData = action.payload.results;
    });

    builder.addCase(fetchNotices.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const noticesReducer = noticesSlice.reducer;
