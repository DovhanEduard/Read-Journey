export const selectRecommendedBooks = state => state.book.recommendedBooks;
export const selectUserBooks = state => state.book.userBooks;
export const selectTotalPages = state => state.book.totalPages;
export const selectBook = state => state.book.book;

export const selectIsLoading = state => state.book.isLoading;
export const selectError = state => state.book.error;
