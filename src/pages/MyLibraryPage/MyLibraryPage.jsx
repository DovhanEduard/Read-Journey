import AddBookForm from 'components/MyLibraryPage/AddBookForm/AddBookForm';
import css from './MyLibraryPage.module.css';
import Dashboard from 'components/Common/Dashboard/Dashboard';
import LibraryRecommendedBooks from 'components/MyLibraryPage/LibraryRecommendedBooks/LibraryRecommendedBooks';

const MyLibraryPage = () => {
  return (
    <div className="container">
      <section className="section">
        <div className={css.wrapper}>
          <Dashboard>
            <AddBookForm />
            <LibraryRecommendedBooks />
          </Dashboard>
        </div>
      </section>
    </div>
  );
};

export default MyLibraryPage;
