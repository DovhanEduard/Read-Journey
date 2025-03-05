import LibraryRecommendedBooksListItem from '../LibraryRecommendedBooksListItem/LibraryRecommendedBooksListItem';
import css from './LibraryRecommendedBooksList.module.css';

const LibraryRecommendedBooksList = () => {
  return (
    <>
      <ul className={css.recBooksList}>
        <li className={css.recBooksListItem}>
          <LibraryRecommendedBooksListItem />
        </li>
        <li className={css.recBooksListItem}>
          <LibraryRecommendedBooksListItem />
        </li>
      </ul>
    </>
  );
};

export default LibraryRecommendedBooksList;
