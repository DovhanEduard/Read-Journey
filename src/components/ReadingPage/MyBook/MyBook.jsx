import css from './MyBook.module.css';
import { FaRegCircle } from 'react-icons/fa';

const MyBook = ({ book }) => {
  return (
    <div className={css.myBookWrapper}>
      <h2 className={css.title}>My reading</h2>

      <div className={css.cardWrapper}>
        <button className={css.openBtn} type="button">
          <img className={css.bookImg} src={book.imageUrl} alt="book image" />
        </button>

        <p className={css.bookName}>{book.title}</p>
        <p className={css.authorName}>{book.author}</p>

        <button className={css.startStopBtn} type="button">
          <FaRegCircle className={css.startIcon} />
        </button>
      </div>
    </div>
  );
};

export default MyBook;
