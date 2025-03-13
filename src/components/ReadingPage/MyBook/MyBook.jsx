import css from './MyBook.module.css';
import { FaRegCircle } from 'react-icons/fa';

const MyBook = () => {
  return (
    <div className={css.cardWrapper}>
      <button className={css.openBtn} type="button">
        <img
          className={css.bookImg}
          src="/img/books/book-1.jpg"
          alt="book image"
        />
      </button>

      <p className={css.bookName}>Lovers of Justice</p>
      <p className={css.authorName}>Yuri Andrukhovych</p>

      <button className={css.startStopBtn} type="button">
        <FaRegCircle className={css.startIcon} />
      </button>
    </div>
  );
};

export default MyBook;
