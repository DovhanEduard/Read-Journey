import { useDispatch, useSelector } from 'react-redux';
import css from './DiaryListItem.module.css';
import { FaRegTrashAlt } from 'react-icons/fa';
import { selectBook } from '../../../redux/book/selectors';
import { formatTime } from '../../../utils/formatTime';
import { pagesPerHour } from '../../../utils/pagePerHour';
import { deleteReadingBook } from '../../../redux/book/operations';

const DiaryListItem = ({ progress }) => {
  const book = useSelector(selectBook);
  const dispatch = useDispatch();

  const date = new Date(progress.finishReading);
  const formattedDate = date.toLocaleDateString('uk-UA', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const totalPages = book.totalPages;
  const readingTime = formatTime(progress.speed);
  const percentage = (progress.finishPage / totalPages) * 100;
  const readPages = progress.finishPage - progress.startPage;
  const pagesPerHours = pagesPerHour(readPages, progress.speed).toFixed(0);

  const onDeleteProgress = () => {
    dispatch(deleteReadingBook({ bookId: book._id, readingId: progress._id }));
  };

  return (
    <div className={css.item}>
      <div className={css.timeLineWrapper}>
        <div className={css.timeLine}>
          <div className={css.mark}></div>
          <div className={css.line}></div>
        </div>
        <div className={css.textInfo}>
          <p className={css.diaryDateText}>{formattedDate}</p>
          <p className={css.diaryText}>{percentage.toFixed(2)}%</p>
          <p className={css.minute}>{readingTime} minutes</p>
        </div>
      </div>

      <div className={css.chartInfo}>
        <div>
          <p className={css.chartText}>{readPages} pages</p>
          <div className={css.greenLine}></div>
          <p className={`${css.chartText} ${css.perHourText}`}>
            {pagesPerHours} pages per hour
          </p>
        </div>

        <button className={css.deleteBtn} onClick={onDeleteProgress}>
          <FaRegTrashAlt className={css.deleteIcon} />
        </button>
      </div>
    </div>
  );
};

export default DiaryListItem;
