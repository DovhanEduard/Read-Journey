import css from './LibraryRecommendedBooksListItem.module.css';
import { useState } from 'react';
import { Modal } from 'antd';
import { IoClose } from 'react-icons/io5';
import DetailedBookInfo from 'components/RecommendedPage/DetailedBookInfo/DetailedBookInfo';

const LibraryRecommendedBooksListItem = () => {
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

      <p className={css.bookName}>Lovers of Justice</p>
      <p className={css.authorName}>Yuri Andrukhovych</p>

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

export default LibraryRecommendedBooksListItem;
