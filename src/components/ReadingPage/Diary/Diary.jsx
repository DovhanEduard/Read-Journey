import DiaryList from '../DiaryList/DiaryList';
import css from './Diary.module.css';

const Diary = () => {
  return (
    <div className={css.diaryWrapper}>
      <DiaryList />
    </div>
  );
};

export default Diary;
