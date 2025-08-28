import css from './LibraryRecommendedBooks.module.css';
import { FaLongArrowAltRight } from 'react-icons/fa';

import LibraryRecommendedBooksList from '../LibraryRecommendedBooksList/LibraryRecommendedBooksList';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalPages } from '../../../redux/book/selectors';
import { getRecommendedBooks } from '../../../redux/book/operations';

const LibraryRecommendedBooks = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const totalPages = useSelector(selectTotalPages);
  const isLastPage = page === totalPages;

  const onNextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const limit = 3;

    dispatch(getRecommendedBooks({ title: '', author: '', page, limit }));
  }, [page, dispatch]);

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Recommended books</h2>

      <div className={css.btnWrapper}>
        <button
          className={css.swipeBtn}
          type="button"
          onClick={onNextPage}
          disabled={isLastPage}
        >
          <FaLongArrowAltRight className={css.swipeIcon} />
        </button>
      </div>

      <LibraryRecommendedBooksList page={page} />

      <Link className={css.link} to="/recommended">
        Home
      </Link>
    </div>
  );
};

export default LibraryRecommendedBooks;
