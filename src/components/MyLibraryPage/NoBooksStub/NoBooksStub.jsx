import css from './NoBooksStub.module.css';

const NoBooksStub = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.iconWrapper}>
        <img
          className={css.booksIcon}
          src="img/books/books_icon_50x50.png"
          alt="books icon"
        />
      </div>
      <p className={css.text}>
        To start training, add&nbsp;
        <span className={css.accentColor}>some of your books</span> or from the
        recommended ones
      </p>
    </div>
  );
};

export default NoBooksStub;
