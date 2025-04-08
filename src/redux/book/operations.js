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

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewBook = createAsyncThunk(
  'book/addNewBook',
  async ({ title, author, totalPages }, thunkAPI) => {
    try {
      const { data } = await instance.post(`/books/add`, {
        title,
        author,
        totalPages,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBookFromRecommend = createAsyncThunk(
  'book/addBookFromRecommend',
  async (bookId, thunkAPI) => {
    try {
      const { data } = await instance.post(`/books/add/${bookId}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addStartReadingPointToBook = createAsyncThunk(
  'book/addStartReadingPointToBook',
  async ({ id, page }, thunkAPI) => {
    try {
      const { data } = await instance.post(`/books/reading/start`, {
        id,
        page,
      });

      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFinishReadingPointToBook = createAsyncThunk(
  'book/addFinishReadingPointToBook',
  async ({ id, page }, thunkAPI) => {
    try {
      const { data } = await instance.post(`/books/reading/finish`, {
        id,
        page,
      });

      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
