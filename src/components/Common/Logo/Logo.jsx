import css from './Logo.module.css';

const Logo = () => {
  return (
    <div className={css.logoWrapper}>
      <img
        className={css.logo}
        src="/img/logo-desk.png"
        alt="Logo Read Journey"
      />
      <p className={css.logoText}>read journey</p>
    </div>
  );
};

export default Logo;
