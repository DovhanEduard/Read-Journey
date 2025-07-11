import { useDispatch } from 'react-redux';
import css from './StartReadingModalContent.module.css';
import { useNavigate } from 'react-router-dom';
import { getBookById } from '../../../redux/book/operations';
import toast from 'react-hot-toast';

const StartReadingModalContent = ({ book, setIsModalOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onStartReading = () => {
    dispatch(getBookById(book._id))
      .unwrap()
      .then(() => {
        setIsModalOpen(false);
        navigate('/reading', { state: { bookId: book._id } });
      })
      .catch(() => {
        toast.error('Some error occurred! Please try later.');
      });
  };

  return (
    <div className={css.wrapper}>
      <img className={css.bookImage} src={book.imageUrl} alt="book image" />

      <div className={css.infoWrapper}>
        <p className={css.bookName}>{book.title}</p>
        <p className={css.authorName}>{book.author}</p>
        <p className={css.pages}>{book.totalPages} pages</p>
      </div>

      <button className={css.addBtn} type="button" onClick={onStartReading}>
        Start reading
      </button>
    </div>
  );
};

export default StartReadingModalContent;
