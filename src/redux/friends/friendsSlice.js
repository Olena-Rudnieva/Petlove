import { createSlice } from '@reduxjs/toolkit';
import { fetchFriends } from './friendsOperations';

export const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    newsData: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder.addCase(fetchFriends.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchFriends.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.newsData = action.payload;
    });

    builder.addCase(fetchFriends.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const friendsReducer = friendsSlice.reducer;
