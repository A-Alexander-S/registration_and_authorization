import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { postSignUpThunk } from '../../store/middlewares/authMiddlewares';
import Button from '../Button';
// import eyeClosed from './img/';
import './form-sign-up.scss';

const FormSignUp = () => {

  const dispatch = useDispatch();

  const [formRegistration, setFormRegistration] = useState({
    email: '',
    password: '',
    // email: "eve.holt@reqres.in",
    // password: "pistol",
  });
  const [formValidation, setFormValidation] = useState({
    email: false,
    password: false,
    confirmPassw: false,
  });
  const [confirmPassw, setConfirmPassw] = useState('');
  const [isVisiblePassw, setIsVisiblePassw] = useState({
    passw: false,
    confirmPassw: false,
  });

  const validate = (field) => {
    switch (field) {
      case 'email':
        return formValidation.email == true && formRegistration.email != ''
          ? 'input-field input-field--error'
          : 'input-field';
        break;
      case 'passw':
        return formValidation.password == true && formRegistration.password != ''
          ? 'input-field input-password input-field--error'
          : 'input-field input-password';
        break;
      case 'confirmPassw':
        return formValidation.confirmPassw == true && confirmPassw != ''
          ? 'input-field input-password input-field--error'
          : 'input-field input-password';
        break;
      default:
        break;
    }
  }

  const handlers = {
    setEmail: (e) => {
      const email = e.currentTarget.value;

      setFormValidation({
        ...formValidation,
        email: email == 'eve.holt@reqres.in' ? false : true
      });

      setFormRegistration({
        ...formRegistration,
        email: email
      });
    },
    setPassw: (e) => {
      const passw = e.currentTarget.value;

      var pattern = new RegExp(/[A-Za-z0-9]{6,}/);

      setFormValidation({
        ...formValidation,
        password: pattern.test(passw) ? false : true
      });

      setFormRegistration({
        ...formRegistration,
        password: e.currentTarget.value
      });
    },
    onChangeConfirmPassw: (e) => {
      setFormValidation({
        ...formValidation,
        confirmPassw: e.currentTarget.value == formRegistration.password ? false : true
      });

      setConfirmPassw(e.currentTarget.value);
    },
    setIsVisiblePassw: (e) => {

      switch (e.currentTarget.dataset.passwPic) {
        case 'passw':
          setIsVisiblePassw({
            ...isVisiblePassw,
            passw: !isVisiblePassw.passw
          });
          break;
        case 'confirm-passw':
          setIsVisiblePassw({
            ...isVisiblePassw,
            confirmPassw: !isVisiblePassw.confirmPassw
          });
          break;
        default:
          break;
      }
    }
  }

  const callbacks = {
    onSignUp: useCallback((e) => {
      // e.preventDefault();
      if (
        (formValidation.email == false && formRegistration.email != '')
        && (formValidation.password == false && formRegistration.password != '')
        && (formValidation.confirmPassw == false && confirmPassw != '')) {
        // console.log('postSignUp:', 'postSignUp')
        dispatch(postSignUpThunk(formRegistration));
      }
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
        <svg
          onClick={handlers.setIsVisiblePassw}
          className="form-sign-up__password-pic"
          data-passw-pic='passw'
          width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M10.7302 5.07319C11.1448 5.02485 11.5684 5 11.9999 5C16.6639 5 20.3998 7.90264 21.9999 12C21.6053 13.0104 21.0809 13.9482 20.4446 14.7877M6.51956 6.51944C4.47949 7.76406 2.90105 9.69259 1.99994 12C3.60008 16.0974 7.33597 19 11.9999 19C14.0375 19 15.8979 18.446 17.4805 17.4804M9.87871 9.87859C9.33576 10.4215 8.99994 11.1715 8.99994 12C8.99994 13.6569 10.3431 15 11.9999 15C12.8284 15 13.5785 14.6642 14.1214 14.1212" stroke="#808185" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 4L20 20" stroke="#808185" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        <input
          id='sign-up-password'
          className={validate('passw')}
          type={isVisiblePassw.passw ? 'text' : 'password'}
          placeholder='Пароль'
          name='password'
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
        <svg
          onClick={handlers.setIsVisiblePassw}
          className="form-sign-up__confirm-password-pic"
          data-passw-pic='confirm-passw'
          width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M10.7302 5.07319C11.1448 5.02485 11.5684 5 11.9999 5C16.6639 5 20.3998 7.90264 21.9999 12C21.6053 13.0104 21.0809 13.9482 20.4446 14.7877M6.51956 6.51944C4.47949 7.76406 2.90105 9.69259 1.99994 12C3.60008 16.0974 7.33597 19 11.9999 19C14.0375 19 15.8979 18.446 17.4805 17.4804M9.87871 9.87859C9.33576 10.4215 8.99994 11.1715 8.99994 12C8.99994 13.6569 10.3431 15 11.9999 15C12.8284 15 13.5785 14.6642 14.1214 14.1212" stroke="#808185" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 4L20 20" stroke="#808185" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        <input
          id='sign-up-confirm-password'
          className={validate('confirmPassw')}
          type={isVisiblePassw.confirmPassw ? 'text' : 'password'}
          placeholder='повторите пароль'
          name="confirm-password"
          autoComplete="off"
          onChange={handlers.onChangeConfirmPassw}
        />
        {(formValidation.confirmPassw && confirmPassw != '') &&
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