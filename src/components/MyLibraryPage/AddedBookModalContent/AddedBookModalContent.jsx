import css from './AddedBookModalContent.module.css';

const AddedBookModalContent = () => {
  return (
    <div className={css.wrapper}>
      <img
        className={css.thumbUpIcon}
        src="../../../../public/img/icons/thumb-up-50x50.png"
        alt="thumb up icon"
      />

      <p className={css.title}>Good job</p>
      <p className={css.text}>
        Your book is now in&nbsp;
        <span className={css.accentColor}>the library!</span> The joy knows no
        bounds and now you can start your training
      </p>
    </div>
  );
};

export default AddedBookModalContent;
