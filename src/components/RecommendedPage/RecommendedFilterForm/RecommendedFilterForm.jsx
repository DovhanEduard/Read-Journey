import { useDispatch } from 'react-redux';
import css from './RecommendedFilterForm.module.css';
import { useForm } from 'react-hook-form';
import { getRecommendedBooks } from '../../../redux/book/operations';

const RecommendedFilterForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = formData => {
    dispatch(
      getRecommendedBooks({ title: formData.title, author: formData.author })
    );
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={css.filterFormTitile}>Filters:</h2>

      <div className={css.inputsWrapper}>
        <input
          className={css.input}
          placeholder="Book title:"
          {...register('title')}
        />

        {errors.title && <p className={css.error}>{errors.email.message}</p>}

        <input
          className={css.input}
          placeholder="The author:"
          {...register('author')}
        />

        {errors.author && <p className={css.error}>{errors.email.message}</p>}
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
