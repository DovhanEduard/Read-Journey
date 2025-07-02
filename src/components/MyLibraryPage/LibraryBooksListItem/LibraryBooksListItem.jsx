import { Modal } from 'antd';
import css from './LibraryBooksListItem.module.css';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteUserBook } from '../../../redux/book/operations';
import StartReadingModalContent from '../StartReadingModalContent/StartReadingModalContent';

const LibraryBooksListItem = ({ book }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteBook = () => {
    dispatch(deleteUserBook(book._id));
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.cardWrapper}>
      <button className={css.openBtn} type="button" onClick={showModal}>
        <img className={css.bookImg} src={book.imageUrl} alt="book image" />
      </button>

      <div className={css.nameWrapper}>
        <p className={css.bookName}>{book.title}</p>
        <p className={css.authorName}>{book.author}</p>
      </div>

      <button className={css.deleteBtn} type="button" onClick={deleteBook}>
        <FaRegTrashAlt className={css.deleteIcon} />
      </button>

      <Modal
        classNames={{ wrapper: css.modalWrapper, content: css.modalContent }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered={true}
        footer={null}
        closeIcon={<IoClose className={css.closeIcon} />}
      >
        <StartReadingModalContent book={book} setIsModalOpen={setIsModalOpen} />
      </Modal>
    </div>
  );
};

export default LibraryBooksListItem;
