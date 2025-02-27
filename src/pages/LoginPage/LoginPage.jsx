import css from './LoginPage.module.css';
import BackgroundPhoneImg from 'components/Common/ContentiPhoneImg/ContentiPhoneImg';
import LoginForm from 'components/LoginPage/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={css.loginContainer}>
          <LoginForm />
          <BackgroundPhoneImg />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
