import css from './ReadingPage.module.css';
import Dashboard from 'components/Common/Dashboard/Dashboard';
import AddReading from 'components/ReadingPage/AddReading/AddReading';
import MyBook from 'components/ReadingPage/MyBook/MyBook';
import ProgressPlaceholder from 'components/ReadingPage/ProgressPlaceholder/ProgressPlaceholder';

const ReadingPage = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={css.wrapper}>
          <Dashboard>
            <AddReading />
            <ProgressPlaceholder />
          </Dashboard>

          <MyBook />
        </div>
      </div>
    </section>
  );
};

export default ReadingPage;
