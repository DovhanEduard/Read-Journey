import css from './LoginForm.module.css';
import { useForm, Controller } from 'react-hook-form';
import { Input } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Logo from 'components/Common/Logo/Logo';
import { Link } from 'react-router';

const LoginForm = () => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),

    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .required('Password is required'),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log(data);
  };

  //   console.log(watch('name'));

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <Logo />
      <h2 className={css.loginFormTitile}>
        Expand your mind, reading&nbsp;
        <span className={css.accentColor}>a book</span>
      </h2>

      <input className={css.input} placeholder="Mail:" {...register('email')} />

      {errors.email && <p className={css.error}>{errors.email.message}</p>}

      <Controller
        name="password"
        control={control}
        placeholder="Password"
        render={({ field }) => (
          <Input.Password
            className={`${css.input} ${css.passwordInput}`}
            placeholder="Password:"
            variant="borderless"
            {...field}
          />
        )}
      />

      {errors.password && (
        <p className={css.error}>{errors.password.message}</p>
      )}

      <div className={css.submitBtnWrapper}>
        <button className={css.registerFormBtn} type="submit">
          Login
        </button>

        <Link className={css.registerLink} to="/register">
          Don&apos;t have an account?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
