import BackgroundPhoneImg from 'components/Common/ContentiPhoneImg/ContentiPhoneImg';
import RegisterForm from 'components/RegisterPage/RegisterForm/RegisterForm';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={css.registerContainer}>
          <RegisterForm />
          <BackgroundPhoneImg />
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
