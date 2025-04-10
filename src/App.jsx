import Layout from 'components/Common/Layout/Layout';
import LoginPage from 'pages/LoginPage/LoginPage';
import MyLibraryPage from 'pages/MyLibraryPage/MyLibraryPage';
import ReadingPage from 'pages/ReadingPage/ReadingPage';
import RecommendedPage from 'pages/RecommendedPage/RecommendedPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { register, login, logout, refreshUser } from './redux/auth/operations';
import {
  getRecommendedBooks,
  getUserBooks,
  getBookById,
  addNewBook,
  addBookFromRecommend,
  addStartReadingPointToBook,
  addFinishReadingPointToBook,
} from './redux/book/operations';

function App() {
  const dispatch = useDispatch();

  dispatch(
    login({
      email: 'test@gmail.com',
      password: '1234567',
    })
  );
  // 673262c15914964b4a87e734
  setTimeout(() => {
    dispatch(getBookById('673262c15914964b4a87e734'));
  }, 2000);

  setTimeout(() => {
    dispatch(
      addStartReadingPointToBook({ id: '673262c15914964b4a87e734', page: 15 })
    );
  }, 4000);

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/recommended" element={<RecommendedPage />} />
          <Route path="/library" element={<MyLibraryPage />} />
          <Route path="/reading" element={<ReadingPage />} />

          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
