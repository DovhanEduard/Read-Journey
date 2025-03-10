import LibraryBooksListItem from '../LibraryBooksListItem/LibraryBooksListItem';
import css from './LibraryBooksList.module.css';

const LibraryBooksList = () => {
  return (
    <>
      <ul className={css.bookList}>
        <li className={css.bookListItem}>
          <LibraryBooksListItem />
        </li>
        <li className={css.bookListItem}>
          <LibraryBooksListItem />
        </li>
      </ul>
    </>
  );
};

export default LibraryBooksList;
