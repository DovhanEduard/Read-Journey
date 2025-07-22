import { useDispatch } from 'react-redux';
import css from './AddReading.module.css';
import { useForm } from 'react-hook-form';
import {
  addFinishReadingPointToBook,
  addStartReadingPointToBook,
} from '../../../redux/book/operations';

const AddReading = ({ book }) => {
  const dispatch = useDispatch();
  console.log(book);
  const isReadingActive =
    book.progress[book.progress.length - 1].status === 'active';

  console.log('last elem', isReadingActive);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = data => {
    const page = Number(data.pageNumber);
    if (isReadingActive) {
      dispatch(addFinishReadingPointToBook({ id: book._id, page }))
        .unwrap()
        .then(() => {})
        .catch(() => {});
    } else {
      dispatch(addStartReadingPointToBook({ id: book._id, page }))
        .unwrap()
        .then(() => {})
        .catch(() => {});
    }
  };

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
            {isReadingActive ? 'To stop' : 'To start'}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddReading;
