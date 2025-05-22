import { useSelector } from 'react-redux';
import css from './UserBar.module.css';
import { selectAuthUser } from '../../../redux/auth/selectors';
import { getCapitalizedFirstLetter } from '../../../utils/getCapitalizedFirstLetter';

const UserBar = () => {
  const user = useSelector(selectAuthUser);

  const firstNameLetter = getCapitalizedFirstLetter(user.name);

  return (
    <div className={css.wrraper}>
      <div className={css.userWrapper}>
        <p className={css.firstNameLetter}>{firstNameLetter}</p>
      </div>

      <p className={css.name}>{user.name}</p>
    </div>
  );
};

export default UserBar;
