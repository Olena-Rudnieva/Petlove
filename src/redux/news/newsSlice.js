import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './newsOperations';

export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    newsData: [],
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
    });

    builder.addCase(fetchNews.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const newsReducer = newsSlice.reducer;
