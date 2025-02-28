import clsx from 'clsx';
import css from './Logo.module.css';

const Logo = ({ additionalClassName }) => {
  return (
    <div className={css.logoWrapper}>
      <img
        className={css.logo}
        src="/img/logo-desk.png"
        alt="Logo Read Journey"
      />
      <p className={clsx(css.logoText, additionalClassName)}>read journey</p>
    </div>
  );
};

export default Logo;
