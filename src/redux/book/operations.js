import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/operations';

export const getRecommendedBooks = createAsyncThunk(
  'book/getRecommendedBooks',
  async ({ title = '', author = '', page = 1, limit = 10 }, thunkAPI) => {
    try {
      const { data } = await instance.get('/books/recommend', {
        params: {
          title,
          author,
          page,
          limit,
        },
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserBooks = createAsyncThunk(
  'book/getUserBooks',
  async (status = '', thunkAPI) => {
    try {
      const params = {};

      if (status !== '') {
        params.status = status;
      }

      const { data } = await instance.get(`/books/own`, { params });

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

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteReadingBook = createAsyncThunk(
  'book/deleteReadingBook',
  async ({ bookId, readingId }, thunkAPI) => {
    try {
      const { data } = await instance.delete(
        `/books/reading?bookId=${bookId}&readingId=${readingId}`
      );

      return data;
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteUserBook = createAsyncThunk(
  'book/deleteUserBook',
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/books/remove/${id}`);

      return data;
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
