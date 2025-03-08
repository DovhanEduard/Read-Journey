import NoBooksStub from '../NoBooksStub/NoBooksStub';
import css from './MyLibraryBooks.module.css';
import { Select } from 'antd';

const MyLibraryBooks = () => {
  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>My library</h2>

      <Select
        defaultValue="All books"
        popupClassName={css.dropdown}
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          {
            className: css.selectOption,
            value: 'allBooks',
            label: 'All books',
          },
          {
            value: 'unread',
            label: 'Unread',
          },
          {
            value: 'inProgress',
            label: 'In progress',
          },
          {
            value: 'done',
            label: 'Done',
          },
        ]}
      />

      <NoBooksStub />
    </div>
  );
};

export default MyLibraryBooks;
