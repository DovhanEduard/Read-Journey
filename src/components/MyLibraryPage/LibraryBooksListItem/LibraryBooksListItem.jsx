import { Modal } from 'antd';
import css from './LibraryBooksListItem.module.css';
import { IoClose } from 'react-icons/io5';
import DetailedBookInfo from 'components/RecommendedPage/DetailedBookInfo/DetailedBookInfo';
import { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const LibraryBooksListItem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <img
          className={css.bookImg}
          src="/img/books/book-1.jpg"
          alt="book image"
        />
      </button>

      <div className={css.bookNameWrapper}>
        <div>
          <p className={css.bookName}>Lovers of Justice</p>
          <p className={css.authorName}>Yuri Andrukhovych</p>
        </div>
        <button className={css.deleteBtn} type="button">
          <FaRegTrashAlt className={css.deleteIcon} />
        </button>
      </div>

      <Modal
        classNames={{ wrapper: css.modalWrapper, content: css.modalContent }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered={true}
        footer={null}
        closeIcon={<IoClose className={css.closeIcon} />}
      >
        <DetailedBookInfo />
      </Modal>
    </div>
  );
};

export default LibraryBooksListItem;
