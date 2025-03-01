import Dashboard from 'components/Common/Dashboard/Dashboard';
import BookQuote from 'components/RecommendedPage/BookQuote/BookQuote';
import FunctionalityDescription from 'components/RecommendedPage/FunctionalityDescription/FunctionalityDescription';
import RecommendedBooks from 'components/RecommendedPage/RecommendedBooks/RecommendedBooks';
import RecommendedFilterForm from 'components/RecommendedPage/RecommendedFilterForm/RecommendedFilterForm';
import css from './RecommendedPage.module.css';

const RecommendedPage = () => {
  return (
    <div className="container">
      <section className="section">
        <div className={css.wrapper}>
          <Dashboard>
            <RecommendedFilterForm />
            <FunctionalityDescription />
            <BookQuote />
          </Dashboard>

          <RecommendedBooks />
        </div>
      </section>
    </div>
  );
};

export default RecommendedPage;
