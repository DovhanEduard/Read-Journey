import css from './BookQuote.module.css';

const BookQuote = () => {
  return (
    <div className={css.wrapper}>
      <img
        className={css.booksIcon}
        src="/public/img/books/bookIcon.png"
        alt="books icon"
      />
      <p className={css.quote}>
        &quot;Books are <span className={css.accentColor}>windows</span> to the
        world, and reading is a journey into the unknown.&quot;
      </p>
    </div>
  );
};

export default BookQuote;
