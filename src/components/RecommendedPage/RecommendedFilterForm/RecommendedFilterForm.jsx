import css from './RecommendedFilterForm.module.css';
import { useForm } from 'react-hook-form';

const RecommendedFilterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = data => {
    console.log(data);
  };

  //   console.log(watch('name'));

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={css.filterFormTitile}>Filters:</h2>

      <div className={css.inputsWrapper}>
        <input
          className={css.input}
          placeholder="Book title:"
          {...register('bookTitle')}
        />

        {errors.bookTitle && (
          <p className={css.error}>{errors.email.message}</p>
        )}

        <input
          className={css.input}
          placeholder="The author:"
          {...register('theAuthor')}
        />

        {errors.theAuthor && (
          <p className={css.error}>{errors.email.message}</p>
        )}
      </div>

      <div className={css.submitBtnWrapper}>
        <button className={css.filterFormBtn} type="submit">
          To apply
        </button>
      </div>
    </form>
  );
};

export default RecommendedFilterForm;
