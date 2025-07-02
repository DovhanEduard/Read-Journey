import { Link } from 'react-router';
import css from './UserNav.module.css';

const UserNav = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <Link to="/recommended">Home</Link>
        </li>
        <li className={css.navItem}>
          <Link to="/library">My library</Link>
        </li>
        <li className={css.navItem}>
          <Link to="/reading">Reading</Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
