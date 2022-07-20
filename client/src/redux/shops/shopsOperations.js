import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchShops = createAsyncThunk(
  'shops/fetchShops',
  async (_, { rejectWithValue }) => {
    try {
      const shops = await axios.get('/api/shops');
      return shops.data; //check
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

