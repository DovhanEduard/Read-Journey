import css from './BookIsReadModalContent.module.css';

const BookIsReadModalContent = () => {
  return (
    <div className={css.wrapper}>
      <img
        className={css.booksIcon}
        src="img/books/books_icon_50x50.png"
        alt="books icon"
      />

      <p className={css.title}>The book is read</p>

      <p className={css.text}>
        It was an <span className={css.accentColor}>exciting journey</span>,
        where each page revealed new horizons, and the characters became
        inseparable friends.
      </p>
    </div>
  );
};

export default BookIsReadModalContent;
