import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './newsOperations';

export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    newsData: [],
    totalPages: null,
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder.addCase(fetchNews.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.newsData = action.payload.results;
      state.totalPages = action.payload.totalPages;
    });

    builder.addCase(fetchNews.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const newsReducer = newsSlice.reducer;
