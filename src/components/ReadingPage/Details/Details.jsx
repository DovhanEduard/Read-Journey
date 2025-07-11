import Diary from '../Diary/Diary';
import css from './Details.module.css';
import { FaRegHourglass } from 'react-icons/fa';
import { AiOutlinePieChart } from 'react-icons/ai';
import Statistics from '../Statistics/Statistics';
import { useState } from 'react';
import { Modal } from 'antd';
import { IoClose } from 'react-icons/io5';
import BookIsReadModalContent from '../BookIsReadModalContent/BookIsReadModalContent';
import clsx from 'clsx';

const Details = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDiaryOpen, setIsDiaryOpen] = useState(true);
  const [isStatisticsOpen, setIsStatisticsOpen] = useState(false);

  const onDiaryOpen = () => {
    setIsDiaryOpen(true);
    setIsStatisticsOpen(false);
  };

  const onStatisticsOpen = () => {
    setIsStatisticsOpen(true);
    setIsDiaryOpen(false);
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
    <div className={css.detailsWrapper}>
      <div className={css.titleWrapper}>
        <h2 className={css.title}>{isDiaryOpen ? 'Diary' : 'Statistics'}</h2>
        <div className={css.btnWrapper}>
          <button className={css.diaryBtn} type="button" onClick={onDiaryOpen}>
            <FaRegHourglass
              className={clsx(css.hourGlassIcon, isDiaryOpen && css.disabled)}
            />
          </button>
          <button className={css.statisticsBtn} type="button">
            <AiOutlinePieChart
              className={clsx(css.chartIcon, isStatisticsOpen && css.disabled)}
              onClick={onStatisticsOpen}
            />
          </button>
        </div>
      </div>

      {isDiaryOpen && <Diary />}
      {isStatisticsOpen && <Statistics />}

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
