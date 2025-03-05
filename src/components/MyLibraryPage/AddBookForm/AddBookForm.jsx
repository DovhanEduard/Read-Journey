import css from './AddBookForm.module.css';
import { useForm } from 'react-hook-form';

const AddBookForm = () => {
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
          <p className={css.error}>{errors.bookTitle.message}</p>
        )}

        <input
          className={css.input}
          placeholder="The author:"
          {...register('author')}
        />

        {errors.author && <p className={css.error}>{errors.author.message}</p>}

        <input
          className={css.input}
          placeholder="Number of pages:"
          {...register('pages')}
        />

        {errors.pages && <p className={css.error}>{errors.pages.message}</p>}
      </div>

      <div className={css.submitBtnWrapper}>
        <button className={css.filterFormBtn} type="submit">
          Add book
        </button>
      </div>
    </form>
  );
};

export default AddBookForm;
