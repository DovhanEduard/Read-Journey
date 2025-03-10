import css from './AddBookForm.module.css';
import { useForm } from 'react-hook-form';
import { Modal } from 'antd';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import AddedBookModalContent from '../AddedBookModalContent/AddedBookModalContent';

const AddBookForm = () => {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = data => {
    console.log(data);
  };

  //   console.log(watch('name'));

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={css.filterFormTitile}>Filters:</h2>

        <div className={css.inputsWrapper}>
          <input
            className={css.input}
            placeholder="Book title:"
            {...register('bookTitle')}
          />

          {errors.bookTitle && (
            <p className={css.error}>{errors.bookTitle.message}</p>
          )}

          <input
            className={css.input}
            placeholder="The author:"
            {...register('author')}
          />

          {errors.author && (
            <p className={css.error}>{errors.author.message}</p>
          )}

          <input
            className={css.input}
            placeholder="Number of pages:"
            {...register('pages')}
          />

          {errors.pages && <p className={css.error}>{errors.pages.message}</p>}
        </div>

        <div className={css.submitBtnWrapper}>
          <button
            className={css.filterFormBtn}
            type="submit"
            onClick={showModal}
          >
            Add book
          </button>
        </div>
      </form>

      <Modal
        classNames={{ wrapper: css.modalWrapper, content: css.modalContent }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered={true}
        footer={null}
        closeIcon={<IoClose className={css.closeIcon} />}
      >
        <AddedBookModalContent />
      </Modal>
    </>
  );
};

export default AddBookForm;
