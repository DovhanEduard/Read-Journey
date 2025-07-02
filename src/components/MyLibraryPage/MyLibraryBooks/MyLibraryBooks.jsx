import { useDispatch, useSelector } from 'react-redux';
import LibraryBooksList from '../LibraryBooksList/LibraryBooksList';
import NoBooksPlaceholder from '../NoBooksPlaceholder/NoBooksPlaceholder';
import css from './MyLibraryBooks.module.css';
import { Select } from 'antd';
import { useEffect } from 'react';
import { getUserBooks } from '../../../redux/book/operations';
import { selectUserBooks } from '../../../redux/book/selectors';

const MyLibraryBooks = () => {
  const dispatch = useDispatch();
  const userBooks = useSelector(selectUserBooks);

  useEffect(() => {
    dispatch(getUserBooks());
  }, [dispatch]);

  const handleChange = selectedValue => {
    const status = selectedValue;
    dispatch(getUserBooks(status));
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>My library</h2>

      <Select
        defaultValue="All books"
        popupClassName={css.dropdown}
        onChange={handleChange}
        options={[
          {
            value: '',
            label: 'All books',
          },
          {
            value: 'unread',
            label: 'Unread',
          },
          {
            value: 'in-progress',
            label: 'In progress',
          },
          {
            value: 'done',
            label: 'Done',
          },
        ]}
      />

      {userBooks.length > 0 ? <LibraryBooksList /> : <NoBooksPlaceholder />}
    </div>
  );
};

export default MyLibraryBooks;
