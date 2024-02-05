import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, NOTICES_URL } from 'constants/api';

axios.defaults.baseURL = `${BASE_URL}`;

export const fetchNotices = createAsyncThunk(
  'notices/fetchNotices',
  async (pageNumber, thunkAPI) => {
    try {
      const response = await axios.get(`${NOTICES_URL}?page=${pageNumber}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
