import RecommendedBooksListItem from '../RecommendedBooksListItem/RecommendedBooksListItem';
import css from './RecommendedBooksList.module.css';

const RecommendedBooksList = () => {
  return (
    <ul className={css.recBooksList}>
      <li className={css.recBooksListItem}>
        <RecommendedBooksListItem />
      </li>
      <li className={css.recBooksListItem}>
        <RecommendedBooksListItem />
      </li>
    </ul>
  );
};

export default RecommendedBooksList;
