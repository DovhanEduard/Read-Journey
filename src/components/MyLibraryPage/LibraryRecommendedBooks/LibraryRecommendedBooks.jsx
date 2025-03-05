import css from './LibraryRecommendedBooks.module.css';
import { IoIosArrowForward } from 'react-icons/io';
import LibraryRecommendedBooksList from '../LibraryRecommendedBooksList/LibraryRecommendedBooksList';
import { Link } from 'react-router';

const LibraryRecommendedBooks = () => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Recommended books</h2>

      <div className={css.btnWrapper}>
        <button className={css.swipeBtn} type="button">
          <IoIosArrowForward className={css.swipeIcon} />
        </button>
      </div>

      <LibraryRecommendedBooksList />

      <Link className={css.link} to="/recommended">
        Home
      </Link>
    </div>
  );
};

export default LibraryRecommendedBooks;
