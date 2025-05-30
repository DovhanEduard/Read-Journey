import css from './DetailedBookInfo.module.css';

const DetailedBookInfo = ({ book }) => {
  return (
    <div className={css.wrapper}>
      <img className={css.bookImage} src={book.imageUrl} alt="book image" />

      <div className={css.infoWrapper}>
        <p className={css.bookName}>{book.title}</p>
        <p className={css.authorName}>{book.author}</p>
        <p className={css.pages}>{book.totalPages} pages</p>
      </div>

      <button className={css.addBtn} type="button">
        Start reading
      </button>
    </div>
  );
};

export default DetailedBookInfo;
