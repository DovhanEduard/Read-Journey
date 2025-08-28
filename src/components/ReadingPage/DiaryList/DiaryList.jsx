import { useSelector } from 'react-redux';
import css from './DiaryList.module.css';
import { selectBook } from '../../../redux/book/selectors';
import DiaryListItem from '../DiaryListItem/DiaryListItem';

const DiaryList = () => {
  const book = useSelector(selectBook);

  return (
    <>
      <ul className={css.diaryList}>
        {book.progress.map(progress => {
          return (
            <li className={css.diaryListItem} key={progress._id}>
              <DiaryListItem progress={progress} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DiaryList;
