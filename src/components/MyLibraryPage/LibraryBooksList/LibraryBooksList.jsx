import { useSelector } from 'react-redux';
import LibraryBooksListItem from '../LibraryBooksListItem/LibraryBooksListItem';
import css from './LibraryBooksList.module.css';
import { selectUserBooks } from '../../../redux/book/selectors';

const LibraryBooksList = () => {
  const userBooks = useSelector(selectUserBooks);
  console.log(userBooks);

  return (
    <>
      <ul className={css.bookList}>
        {userBooks.map(book => {
          return (
            <li className={css.bookListItem} key={book._id}>
              <LibraryBooksListItem book={book} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default LibraryBooksList;
