import BackgroundPhoneImg from 'components/Common/ContentiPhoneImg/ContentiPhoneImg';
import RegisterForm from 'components/RegisterPage/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <section className="section">
      <div className="container registerContainer">
        <RegisterForm />
        <BackgroundPhoneImg />
      </div>
    </section>
  );
};

export default RegisterPage;
