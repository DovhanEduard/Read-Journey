import css from './AddReading.module.css';
import { useForm } from 'react-hook-form';

const AddReading = () => {
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
    <>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={css.filterFormTitile}>Start page:</h2>

        <div className={css.inputsWrapper}>
          <input
            className={css.input}
            placeholder="Page number:"
            {...register('pageNumber')}
          />

          {errors.pageNumber && (
            <p className={css.error}>{errors.pageNumber.message}</p>
          )}
        </div>

        <div className={css.submitBtnWrapper}>
          <button className={css.filterFormBtn} type="submit">
            To start
          </button>
        </div>
      </form>
    </>
  );
};

export default AddReading;
