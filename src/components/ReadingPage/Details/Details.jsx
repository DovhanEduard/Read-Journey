import Diary from '../Diary/Diary';
import css from './Details.module.css';
import { FaRegHourglass } from 'react-icons/fa';
import { AiOutlinePieChart } from 'react-icons/ai';

const Details = () => {
  return (
    <div className={css.detailsWrapper}>
      <div className={css.titleWrapper}>
        <h2>Diary</h2>
        <div className={css.btnWrapper}>
          <button className={css.diaryBtn} type="button">
            <FaRegHourglass className={css.hourGlassIcon} />
          </button>
          <button className={css.statisticsBtn} type="button">
            <AiOutlinePieChart className={css.chartIcon} />
          </button>
        </div>
      </div>

      <Diary />
    </div>
  );
};

export default Details;
