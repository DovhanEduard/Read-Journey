import Diary from '../Diary/Diary';
import css from './Details.module.css';
import { FaRegHourglass } from 'react-icons/fa';
import { AiOutlinePieChart } from 'react-icons/ai';
import Statistics from '../Statistics/Statistics';
import { useState } from 'react';
import { Modal } from 'antd';
import { IoClose } from 'react-icons/io5';
import AddedBookModalContent from 'components/MyLibraryPage/AddedBookModalContent/AddedBookModalContent';
import BookIsReadModalContent from '../BookIsReadModalContent/BookIsReadModalContent';

const Details = () => {
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
    <div className={css.detailsWrapper}>
      <div className={css.titleWrapper}>
        <h2>Diary</h2>
        <div className={css.btnWrapper}>
          <button className={css.diaryBtn} type="button">
            <FaRegHourglass className={css.hourGlassIcon} />
          </button>
          <button className={css.statisticsBtn} type="button">
            <AiOutlinePieChart className={css.chartIcon} />
          </button>
        </div>
      </div>

      {/* <Diary /> */}
      <Statistics />

      <Modal
        classNames={{ wrapper: css.modalWrapper, content: css.modalContent }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered={true}
        footer={null}
        closeIcon={<IoClose className={css.closeIcon} />}
      >
        <BookIsReadModalContent />
      </Modal>
    </div>
  );
};

export default Details;
