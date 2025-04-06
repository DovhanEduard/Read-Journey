import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/operations';

export const getRecommendedBooks = createAsyncThunk(
  'book/getRecommendedBooks',
  async ({ title = '', author = '', page = 1, limit = 10 }, thunkAPI) => {
    try {
      const { data } = await instance.get('/books/recommend', {
        title,
        author,
        page,
        limit,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserBooks = createAsyncThunk(
  'book/getUserBooks',
  async (status = 'unread', thunkAPI) => {
    try {
      const { data } = await instance.get(`/books/own?status=${status}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBookById = createAsyncThunk(
  'book/getBookById',
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.get(`/books/${id}`);

      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/contacts/${contactId}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
