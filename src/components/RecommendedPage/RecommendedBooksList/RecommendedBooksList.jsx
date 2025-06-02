import { useDispatch, useSelector } from 'react-redux';
import RecommendedBooksListItem from '../RecommendedBooksListItem/RecommendedBooksListItem';
import css from './RecommendedBooksList.module.css';
import { useEffect } from 'react';
import { getRecommendedBooks } from '../../../redux/book/operations';
import { selectRecommendedBooks } from '../../../redux/book/selectors';

const RecommendedBooksList = ({ page }) => {
  const dispatch = useDispatch();
  const recommendedBooks = useSelector(selectRecommendedBooks);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    let limit;

    if (screenWidth < 768) {
      limit = 2;
    } else if (screenWidth >= 768 && screenWidth < 1440) {
      limit = 8;
    } else {
      limit = 10;
    }

    dispatch(getRecommendedBooks({ title: '', author: '', page, limit }));
  }, [page, dispatch]);

  return (
    <>
      <ul className={css.recBooksList}>
        {recommendedBooks.map(book => {
          return (
            <li className={css.recBooksListItem} key={book._id}>
              <RecommendedBooksListItem book={book} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default RecommendedBooksList;
