import css from './Logo.module.css';

const Logo = () => {
  return (
    <>
      <img
        className={css.logo}
        src="/img/logo-desk.png"
        alt="Logo Read Journey"
      />
    </>
  );
};

export default Logo;
