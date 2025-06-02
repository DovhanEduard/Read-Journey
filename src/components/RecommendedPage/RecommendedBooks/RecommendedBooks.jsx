import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import RecommendedBooksList from '../RecommendedBooksList/RecommendedBooksList';

import css from './RecommendedBooks.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTotalPages } from '../../../redux/book/selectors';

const RecommendedBooks = () => {
  const [page, setPage] = useState(1);
  const totalPages = useSelector(selectTotalPages);
  const isLastPage = page === totalPages;
  const isFirstPage = page === 1;

  const onPreviousPage = () => {
    setPage(page - 1);
    console.log(page - 1);
  };

  const onNextPage = () => {
    setPage(page + 1);
    console.log(page + 1);
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Recommended</h2>

      <div className={css.btnWrapper}>
        <button
          className={css.swipeBtn}
          type="button"
          onClick={onPreviousPage}
          disabled={isFirstPage}
        >
          <IoIosArrowBack className={css.swipeIcon} />
        </button>
        <button
          className={css.swipeBtn}
          type="button"
          onClick={onNextPage}
          disabled={isLastPage}
        >
          <IoIosArrowForward className={css.swipeIcon} />
        </button>
      </div>

      <RecommendedBooksList page={page} />
    </div>
  );
};

export default RecommendedBooks;
