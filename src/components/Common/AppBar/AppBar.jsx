import { useState } from 'react';
import Logo from '../Logo/Logo';
import UserBar from '../UserBar/UserBar';
import css from './AppBar.module.css';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import MobileMenu from '../MobileMenu/MobileMenu';

const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <header className={css.header}>
        <Logo />

        <div className={css.wrapper}>
          <UserBar />

          <button
            className={css.burgerMenuBtn}
            type="button"
            onClick={() => setIsOpen(true)}
          >
            <HiOutlineMenuAlt3 className={css.burgerIcon} />
          </button>
        </div>

        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </header>
    </div>
  );
};

export default AppBar;
