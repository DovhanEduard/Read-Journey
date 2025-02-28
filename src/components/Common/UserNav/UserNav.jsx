import css from './UserNav.module.css';

const UserNav = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <a href="#">Home</a>
        </li>
        <li className={css.navItem}>
          <a href="#">My Library</a>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
