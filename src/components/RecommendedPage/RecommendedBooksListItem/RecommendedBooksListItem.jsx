import { useState } from 'react';
import { Modal } from 'antd';
import { IoClose } from 'react-icons/io5';
import DetailedBookInfo from '../DetailedBookInfo/DetailedBookInfo';

import css from './RecommendedBooksListItem.module.css';

const RecommendedBooksListItem = ({ book }) => {
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
        <img className={css.bookImg} src={book.imageUrl} alt="book image" />
      </button>

      <p className={css.bookName}>{book.title}</p>
      <p className={css.authorName}>{book.author}</p>

      <Modal
        classNames={{ wrapper: css.modalWrapper, content: css.modalContent }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered={true}
        footer={null}
        closeIcon={<IoClose className={css.closeIcon} />}
      >
        <DetailedBookInfo book={book} />
      </Modal>
    </div>
  );
};

export default RecommendedBooksListItem;
