import css from './Statistics.module.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import { FaSquare } from 'react-icons/fa';

const Statistics = () => {
  const percentage = 66;
  return (
    <div className={css.statisticsWrapper}>
      <div className={css.progressbarWrapper}>
        <CircularProgressbar
          className={css.progressBar}
          value={percentage}
          text={`${percentage}%`}
        />
      </div>

      <p className={css.percentage}>
        <FaSquare className={css.square} />
        19.14%
      </p>
      <p className={css.readPages}>171 pages read</p>
    </div>
  );
};

export default Statistics;
