import css from './StartReadingModalContent.module.css';
import { useDispatch } from 'react-redux';
import { addStartReadingPointToBook } from '../../../redux/book/operations';
import toast from 'react-hot-toast';

const StartReadingModalContent = ({ book, setIsModalOpen }) => {
  const dispatch = useDispatch();

  const onAddBook = () => {
    dispatch(addStartReadingPointToBook({ id: book._id }))
      .unwrap()
      .then(() => {
        setIsModalOpen(false);
        toast.success('You successfully started reading!');
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
        Start reading
      </button>
    </div>
  );
};

export default StartReadingModalContent;
