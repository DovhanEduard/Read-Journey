import css from './RecommendedBooksListItem.module.css';

const RecommendedBooksListItem = () => {
  return (
    <div className={css.cardWrapper}>
      <img
        className={css.bookImg}
        src="/img/books/book-1.jpg"
        alt="book image"
      />

      <p className={css.bookName}>Lovers of Justice</p>
      <p className={css.authorName}>Yuri Andrukhovych</p>
    </div>
  );
};

export default RecommendedBooksListItem;
