import { useDispatch } from 'react-redux';
import css from './DetailedBookInfo.module.css';
import { addBookFromRecommend } from '../../../redux/book/operations';
import toast, { Toaster } from 'react-hot-toast';

const DetailedBookInfo = ({ book }) => {
  const dispatch = useDispatch();

  const onAddBook = () => {
    dispatch(addBookFromRecommend(book._id))
      .unwrap()
      .then(() => {
        toast.success('Book successfully added!');
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

      <button className={css.addBtn} type="button" onClick={onAddBook}>
        Add to library
      </button>
      <Toaster
        position="	bottom-center"
        toastOptions={{
          className: '',
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: '#686868',
            color: '#f9f9f9',
          },
        }}
      />
    </div>
  );
};

export default DetailedBookInfo;
