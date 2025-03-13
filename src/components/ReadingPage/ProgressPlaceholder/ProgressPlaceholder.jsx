import css from './ProgressPlaceholder.module.css';

const ProgressPlaceholder = () => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Progress</h2>
      <p className={css.text}>
        Here you will see when and how much you read. To record, click on the
        red button above.
      </p>
      <div className={css.iconWrapper}>
        <img
          className={css.starIcon}
          src="img/icons/star-icon.png"
          alt="star icon"
        />
      </div>
    </div>
  );
};

export default ProgressPlaceholder;
