import css from './AddBookForm.module.css';
import { useForm } from 'react-hook-form';
import { Modal } from 'antd';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import AddedBookModalContent from '../AddedBookModalContent/AddedBookModalContent';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../../../redux/book/operations';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const schema = yup.object().shape({
    bookTitle: yup
      .string()
      .trim()
      .required('Book title is required')
      .min(2, 'Title must be at least 2 characters'),

    author: yup
      .string()
      .trim()
      .required('Author is required')
      .min(2, 'Author name must be at least 2 characters'),

    pages: yup
      .number()
      .typeError('Pages must be a number')
      .integer('Pages must be an integer')
      .positive('Pages must be a positive number')
      .required('Number of pages is required'),
  });

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
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = data => {
    dispatch(
      addNewBook({
        title: data.bookTitle,
        author: data.author,
        totalPages: data.pages,
      })
    )
      .unwrap()
      .then(() => {
        showModal();
      })
      .catch(() => {
        toast.error('Book successfully added!');
      });
  };

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
          <button className={css.filterFormBtn} type="submit">
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
