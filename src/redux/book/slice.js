import { createSlice } from '@reduxjs/toolkit';
import { getRecommendedBooks, getUserBooks, getBookById } from './operations';

const INITIAL_STATE = {
  recommendedBooks: [],
  userBooks: [],
  book: null,
  page: null,
  perPage: null,
  totalPages: null,
  isLoading: false,
  error: null,
};

export const bookSlice = createSlice({
  name: 'book',
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder
      .addCase(getRecommendedBooks.pending, state => {
        state.isLoading = true;
      })
      .addCase(getRecommendedBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.recommendedBooks = action.payload.results;
        state.page = action.payload.page;
        state.perPage = action.payload.perPage;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getRecommendedBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getUserBooks.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUserBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.userBooks = action.payload;
      })
      .addCase(getUserBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getBookById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getBookById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.book = action.payload;
      })
      .addCase(getBookById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    //   .addCase(deleteContact.pending, state => {
    //     state.isLoading = true;
    //   })
    //   .addCase(deleteContact.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.items = state.items.filter(
    //       contact => contact.id !== action.payload.id
    //     );
    //   })
    //   .addCase(deleteContact.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   });
  },
});

export const bookReducer = bookSlice.reducer;
