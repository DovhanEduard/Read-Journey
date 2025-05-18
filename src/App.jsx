import Layout from 'components/Common/Layout/Layout';
import LoginPage from 'pages/LoginPage/LoginPage';
import MyLibraryPage from 'pages/MyLibraryPage/MyLibraryPage';
import ReadingPage from 'pages/ReadingPage/ReadingPage';
import RecommendedPage from 'pages/RecommendedPage/RecommendedPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from './redux/auth/operations.js';
import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute.jsx';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute.jsx';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, []);

  // dispatch(
  //   login({
  //     email: 'test@gmail.com',
  //     password: '1234567',
  //   })
  // );
  // 673262c15914964b4a87e734

  // 6759b16a5914964b4a8b243f 681c73a35914964b4a930899
  // setTimeout(() => {
  //   dispatch(getBookById('6759b16a5914964b4a8b243f'));
  // }, 2000);

  // setTimeout(() => {
  //   dispatch(
  //     deleteUserBook({
  //       id: '6759b16a5914964b4a8b243f',
  //     })
  //   );
  // }, 4000);

  return (
    <>
      <Layout>
        <Routes>
          <Route
            path="/login"
            element={<RestrictedRoute component={<LoginPage />} />}
          />

          <Route
            path="/register"
            element={<RestrictedRoute component={<RegisterPage />} />}
          />

          <Route
            path="/recommended"
            element={<PrivateRoute component={<RecommendedPage />} />}
          />

          <Route
            path="/library"
            element={<PrivateRoute component={<MyLibraryPage />} />}
          />
          <Route
            path="/reading"
            element={<PrivateRoute component={<ReadingPage />} />}
          />

          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
