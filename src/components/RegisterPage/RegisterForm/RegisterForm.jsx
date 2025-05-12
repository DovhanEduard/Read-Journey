import css from './RegisterForm.module.css';
import { useForm, Controller } from 'react-hook-form';
import { Input } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Logo from 'components/Common/Logo/Logo';
import { Link, Navigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../redux/auth/operations';
import { selectAuthIsLoggedIn } from '../../../redux/auth/selectors';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must be at most 50 characters')
      .matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces')
      .required('Name is required'),

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

  const onSubmit = registerData => {
    dispatch(registerUser(registerData));
  };

  if (isLoggedIn) {
    return <Navigate to="/recommended" replace />;
  }

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.logoWrapper}>
        <Logo />
      </div>

      <h2 className={css.registerFormTitile}>
        Expand your mind, reading&nbsp;
        <span className={css.accentColor}>a book</span>
      </h2>

      <input className={css.input} placeholder="Name:" {...register('name')} />

      {errors.name && <p className={css.error}>{errors.name.message}</p>}

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
          Registration
        </button>

        <Link className={css.loginLink} to="/login">
          Already have an account?
        </Link>
      </div>

      <Navigate />
    </form>
  );
};

export default RegisterForm;
