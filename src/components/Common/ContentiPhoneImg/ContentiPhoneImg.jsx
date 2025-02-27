import css from './ContentiPhoneImg.module.css';

const ContentiPhoneImg = () => {
  return (
    <div className={css.imgWrapper}>
      <picture>
        <source
          srcSet="
                  /img/auth/iPhone15Black-desktop.png    1x
                  "
          media="(min-width: 1440px)"
        />
        <source
          srcSet="
                  /img/auth/iPhone15Black-mobile.png    1x
                  "
          media="(max-width: 767px)"
        />
        <img
          className={css.phoneImg}
          src="/img/auth/iPhone15Black-desktop.png"
          alt="iphone 15"
        />
      </picture>
    </div>
  );
};

export default ContentiPhoneImg;
