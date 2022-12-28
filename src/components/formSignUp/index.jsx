import { useState, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { postSignUpThunk } from '../../store/middlewares/authMiddlewares';
import InputField from '../InputField';
import InputPassword from '../InputPassword';
import Button from '../Button';
import './form-sign-up.scss';

const FormSignUp = () => {

  const dispatch = useDispatch();

  const [formRegistration, setFormRegistration] = useState({
    // username: null,
    email: "eve.holt@reqres.in",
    password: "pistol",
  });
  const [formValidation, setFormValidation] = useState({
    email: false,
    password: false,
    confirmPassw: false,
  });

  const validate = (field) => {
    switch (field) {
      case 'email':
        return formValidation.email == true && formRegistration.email != '' ? 'input-field input-field--error' : 'input-field';
        break;
      case 'passw':
        return formValidation.password == true && formRegistration.password != '' ? 'input-field input-password input-field--error' : 'input-field input-password';
        break;
      default:
        break;
    }
  }

  const handlers = {
    setEmail: (e) => {
      const email = e.currentTarget.value;

      if (email != 'eve.holt@reqres.in') {
        setFormValidation({
          ...formValidation,
          email: true
        });
      }

      if (email == 'eve.holt@reqres.in') {
        setFormValidation({
          ...formValidation,
          email: false
        });
      }

      setFormRegistration({
        ...formRegistration,
        email: email
      });
    },
    setPassw: (e) => {
      const passw = e.currentTarget.value;

      var pattern = new RegExp(/[A-Za-z0-9]{6,}/);

      console.log('setPassw:', pattern.test(passw));

      if (!pattern.test(passw)) {
        setFormValidation({
          ...formValidation,
          password: true
        });
      }

      if (pattern.test(passw)) {
        setFormValidation({
          ...formValidation,
          password: false
        });
      }

      setFormRegistration({
        ...formRegistration,
        password: e.currentTarget.value
      });
    },
    onChangeConfirmPassw: (e) => {
      const confirmPassw = e.currentTarget.value;

      if (confirmPassw != formRegistration.password) {
        setFormValidation({
          ...formValidation,
          confirmPassw: true
        });
      }

      if (confirmPassw == formRegistration.password) {
        setFormValidation({
          ...formValidation,
          confirmPassw: false
        });
      }
    },
  }

  const callbacks = {
    onSignUp: useCallback((e) => {
      e.preventDefault();
      console.log('onSetPassw formRegistration:', formRegistration);
      dispatch(postSignUpThunk(formRegistration));
    }),
  }

  return (
    <form className='form-sign-up'>
      <p className="form-sign-up__title">
        Регистрация
      </p>
      <div className="form-sign-up__name">
        <label className='form-sign-up__label' htmlFor='sign-up-name'>
          Имя
        </label>
        <input
          id='sign-up-name'
          className='input-field'
          type='text'
          placeholder='Артур'
          autoComplete="off"
        />
      </div>
      <div className="form-sign-up__email">
        <label className='form-sign-up__label' htmlFor='sign-up-email'>
          Электронная почта
        </label>
        <input
          id='sign-up-email'
          className={validate('email')}
          type='email'
          placeholder='eve.holt@reqres.in'
          autoComplete="off"
          onChange={handlers.setEmail}
        />
        {(formValidation.email && formRegistration.email != '') &&
          <div className="form-sign-up__error form-sign-up--email-error">
            Ошибка
          </div>
        }
      </div>
      <div className="form-sign-up__password">
        <label className='form-sign-up__label' htmlFor='sign-up-password'>
          Пароль
        </label>
        <input
          id='sign-up-password'
          className={validate('passw')}
          type='password'
          placeholder='Пароль'
          autoComplete="off"
          onChange={handlers.setPassw}
        />
        {(formValidation.password && formRegistration.password != '') &&
          <div className="form-sign-up__error form-sign-up--password-error">
            Ошибка
          </div>
        }
      </div>
      <div className="form-sign-up__confirm-password">
        <label className='form-sign-up__label' htmlFor='sign-up-password'>
          Подтвердите пароль
        </label>
        <input
          id='sign-up-confirm-password'
          className={formValidation.confirmPassw == true ? 'input-field input-password input-field--error' : 'input-field input-password'}
          type='confirm-password'
          placeholder='повторите пароль'
          autoComplete="off"
          onChange={handlers.onChangeConfirmPassw}
        />
        {(formValidation.confirmPassw) &&
          <div className="form-sign-up__error form-sign-up--password-error">
            Ошибка
          </div>
        }
      </div>
      <div className="form-sign-up__wrapp-button">
        <Button
          width='100%'
          height='48px'
          onClick={callbacks.onSignUp}
        >
          Зарегестрироваться
        </Button >
      </div>
    </form>
  )
}

export default FormSignUp;