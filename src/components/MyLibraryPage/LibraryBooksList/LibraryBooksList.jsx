import { useSelector } from 'react-redux';
import LibraryBooksListItem from '../LibraryBooksListItem/LibraryBooksListItem';
import css from './LibraryBooksList.module.css';
import { selectUserBooks } from '../../../redux/book/selectors';
import { Toaster } from 'react-hot-toast';

const LibraryBooksList = () => {
  const userBooks = useSelector(selectUserBooks);

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
      <Toaster
        position="	bottom-center"
        toastOptions={{
          className: '',
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: '#686868',
            color: '#f9f9f9',
          },
        }}
      />
    </>
  );
};

export default LibraryBooksList;
