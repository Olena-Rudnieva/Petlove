import { createSlice } from '@reduxjs/toolkit';
import {
  // addFavoriteNotices,
  fetchNotices,
} from './noticesOperations';

export const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    noticesData: [],
    noticesFavorites: [],
    totalPages: null,
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
      state.totalPages = action.payload.totalPages;
    });

    builder.addCase(fetchNotices.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // builder.addCase(addFavoritesNotices.pending, state => {
    //   state.isLoading = true;
    // });
    // builder.addCase(addFavoriteNotices.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.noticesFavorites = action.payload.results;
    // });
    // builder.addCase(addFavoritesNotices.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // });
    // builder.addCase(removeFavoritesNotices.pending, state => {
    //   state.isLoading = true;
    // });
    // builder.addCase(removeFavoritesNotices.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.noticesFavorites = action.payload.results;
    // });
    // builder.addCase(removeFavoritesNotices.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // });
  },
});

export const noticesReducer = noticesSlice.reducer;
