import css from './ReadingPage.module.css';
import Dashboard from 'components/Common/Dashboard/Dashboard';
import AddReading from 'components/ReadingPage/AddReading/AddReading';
import Details from 'components/ReadingPage/Details/Details';
import MyBook from 'components/ReadingPage/MyBook/MyBook';
import ProgressPlaceholder from 'components/ReadingPage/ProgressPlaceholder/ProgressPlaceholder';
import { selectBook } from '../../redux/book/selectors';
import { useSelector } from 'react-redux';

const ReadingPage = () => {
  const book = useSelector(selectBook);
  const isBookInProgressReading = book?.progress.length > 0;

  return (
    <section className="section">
      <div className="container">
        <div className={css.wrapper}>
          <Dashboard>
            <AddReading book={book} />

            {isBookInProgressReading ? <Details /> : <ProgressPlaceholder />}
          </Dashboard>

          <MyBook book={book} />
        </div>
      </div>
    </section>
  );
};

export default ReadingPage;
