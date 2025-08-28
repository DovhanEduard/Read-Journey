import css from './Statistics.module.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import { FaSquare } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { selectBook } from '../../../redux/book/selectors';
import { getFinishedPage } from '../../../utils/getFinishedPage';

const Statistics = () => {
  const book = useSelector(selectBook);
  const finishedPage = getFinishedPage(book.progress);
  const totalPages = book.totalPages;

  const percentage = (finishedPage / totalPages) * 100;
  return (
    <div className={css.statisticsWrapper}>
      <div className={css.progressbarWrapper}>
        <CircularProgressbar
          className={css.progressBar}
          value={percentage}
          text="100%"
        />
      </div>

      <p className={css.percentage}>
        <FaSquare className={css.square} />
        {percentage.toFixed(2)}%
      </p>
      <p className={css.readPages}>{finishedPage} pages read</p>
    </div>
  );
};

export default Statistics;
