import css from './DetailedBookInfo.module.css';

const DetailedBookInfo = () => {
  return (
    <div className={css.wrapper}>
      <img
        className={css.bookImage}
        src="/public/img/books/book-2.jpg"
        alt="book image"
      />

      <div className={css.infoWrapper}>
        <p className={css.bookName}>Troscha</p>
        <p className={css.authorName}>Vasyl Shkliar</p>
        <p className={css.pages}>416 pages</p>
      </div>

      <button className={css.addBtn} type="button">
        Start reading
      </button>
    </div>
  );
};

export default DetailedBookInfo;
