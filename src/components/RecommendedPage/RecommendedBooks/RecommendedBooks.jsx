import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import RecommendedBooksList from '../RecommendedBooksList/RecommendedBooksList';

import css from './RecommendedBooks.module.css';

const RecommendedBooks = () => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Recommended</h2>

      <div className={css.btnWrapper}>
        <button className={css.swipeBtn} type="button">
          <IoIosArrowBack className={css.swipeIcon} />
        </button>
        <button className={css.swipeBtn} type="button">
          <IoIosArrowForward className={css.swipeIcon} />
        </button>
      </div>

      <RecommendedBooksList />
    </div>
  );
};

export default RecommendedBooks;
