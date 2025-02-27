import LoginPage from 'pages/LoginPage/LoginPage';
import MyLibraryPage from 'pages/MyLibraryPage';
import ReadingPage from 'pages/ReadingPage';
import RecommendedPage from 'pages/RecommendedPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/recommended" element={<RecommendedPage />} />
        <Route path="/library" element={<MyLibraryPage />} />
        <Route path="/reading" element={<ReadingPage />} />

        <Route path="*" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
