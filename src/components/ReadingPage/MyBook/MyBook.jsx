import css from './MyBook.module.css';
import { FaRegCircle, FaSquare } from 'react-icons/fa';
import { useState } from 'react';

const MyBook = ({ book }) => {
  const [isStartedReading, setIsStartedReading] = useState(() => {
    const bookProgressElements = book.progress.length;

    if (
      typeof bookProgressElements !== 'number' ||
      bookProgressElements === 0 ||
      isNaN(bookProgressElements)
    ) {
      return false;
    }

    return !(bookProgressElements % 2 === 0);
  });

  const handleStartStopBtn = () => {
    setIsStartedReading(!isStartedReading);
  };

  return (
    <div className={css.myBookWrapper}>
      <h2 className={css.title}>My reading</h2>

      <div className={css.cardWrapper}>
        <button className={css.openBtn} type="button">
          <img className={css.bookImg} src={book.imageUrl} alt="book image" />
        </button>

        <p className={css.bookName}>{book.title}</p>
        <p className={css.authorName}>{book.author}</p>

        <button
          className={css.startStopBtn}
          type="button"
          onClick={handleStartStopBtn}
        >
          {isStartedReading ? (
            <FaSquare className={css.stopIcon} />
          ) : (
            <FaRegCircle className={css.startIcon} />
          )}
        </button>
      </div>
    </div>
  );
};

export default MyBook;
