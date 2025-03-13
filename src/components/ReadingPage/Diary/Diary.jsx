import css from './Diary.module.css';
import { FaRegTrashAlt } from 'react-icons/fa';

const Diary = () => {
  return (
    <div className={css.diaryWrapper}>
      <div className={css.statWrapper}>
        <p className={css.diaryText}>21.10.2</p>
        <p className={css.diaryText}>23</p>
        <p className={css.diaryText}>7.6%</p>
        <p className={css.minute}>29 minutes</p>
      </div>

      <div className={css.chartWrapper}>
        <div>
          <p className={css.chartText}>42 pages</p>
          <p className={`${css.chartText} ${css.perHourText}`}>
            45 pages per hour
          </p>
        </div>

        <button className={css.deleteBtn} type="button">
          <FaRegTrashAlt className={css.deleteIcon} />
        </button>
      </div>
    </div>
  );
};

export default Diary;
