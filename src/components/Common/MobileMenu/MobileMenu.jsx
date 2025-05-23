import { useEffect } from 'react';
import css from './MobileMenu.module.css';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../redux/auth/operations';

const MobileMenu = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <>
      <div
        className={`${css.overlay} ${isOpen ? css.open : ''}`}
        onClick={onClose}
      ></div>
      <div className={`${css.sidebar} ${isOpen ? css.open : ''}`}>
        <button className={css.closeButton} onClick={onClose}>
          ✖
        </button>
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
        <button className={css.logoutButton} type="button" onClick={onLogout}>
          Log out
        </button>
      </div>
    </>
  );
};

export default MobileMenu;
