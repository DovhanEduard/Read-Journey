import css from './ContentiPhoneImg.module.css';

const ContentiPhoneImg = () => {
  return (
    <div className={css.imgWrapper}>
      <img
        className={css.phoneImg}
        src="/img/auth/iPhone15Black-mobile.png"
        alt="iPhone 15"
      />
    </div>
  );
};

export default ContentiPhoneImg;
