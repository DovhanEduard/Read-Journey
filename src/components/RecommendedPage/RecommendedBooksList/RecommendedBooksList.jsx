import { useDispatch, useSelector } from 'react-redux';
import RecommendedBooksListItem from '../RecommendedBooksListItem/RecommendedBooksListItem';
import css from './RecommendedBooksList.module.css';
import { useEffect } from 'react';
import { getRecommendedBooks } from '../../../redux/book/operations';
import { selectRecommendedBooks } from '../../../redux/book/selectors';

const RecommendedBooksList = () => {
  const dispatch = useDispatch();
  const recommendedBooks = useSelector(selectRecommendedBooks);

  useEffect(() => {
    dispatch(getRecommendedBooks({ title: '', author: '' }));
  }, []);

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
