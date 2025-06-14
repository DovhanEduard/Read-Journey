import { useSelector } from 'react-redux';
import LibraryRecommendedBooksListItem from '../LibraryRecommendedBooksListItem/LibraryRecommendedBooksListItem';
import css from './LibraryRecommendedBooksList.module.css';
import { selectRecommendedBooks } from '../../../redux/book/selectors';

const LibraryRecommendedBooksList = () => {
  const recommendedBooks = useSelector(selectRecommendedBooks);

  return (
    <>
      <ul className={css.recBooksList}>
        {recommendedBooks.map(book => {
          return (
            <li className={css.recBooksListItem} key={book._id}>
              <LibraryRecommendedBooksListItem book={book} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default LibraryRecommendedBooksList;
