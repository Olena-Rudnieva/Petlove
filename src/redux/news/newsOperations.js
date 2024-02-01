import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, NEWS_URL } from 'constants/api';

axios.defaults.baseURL = `${BASE_URL}`;

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${NEWS_URL}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
