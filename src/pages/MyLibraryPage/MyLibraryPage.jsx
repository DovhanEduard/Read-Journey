import AddBookForm from 'components/MyLibraryPage/AddBookForm/AddBookForm';
import css from './MyLibraryPage.module.css';
import Dashboard from 'components/Common/Dashboard/Dashboard';
import LibraryRecommendedBooks from 'components/MyLibraryPage/LibraryRecommendedBooks/LibraryRecommendedBooks';
import MyLibraryBooks from 'components/MyLibraryPage/MyLibraryBooks/MyLibraryBooks';

const MyLibraryPage = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={css.wrapper}>
          <Dashboard>
            <AddBookForm />
            <LibraryRecommendedBooks />
          </Dashboard>
          <MyLibraryBooks />
        </div>
      </div>
    </section>
  );
};

export default MyLibraryPage;
