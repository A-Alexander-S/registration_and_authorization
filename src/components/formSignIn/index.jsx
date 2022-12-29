import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { postSignInThunk } from '../../store/middlewares/authMiddlewares';
import Button from '../Button';
import './form-sign-in.scss';

const FormSignIn = () => {

  const dispatch = useDispatch();

  // eve.holt@reqres.in
  const [formSignIn, setFormSignIn] = useState({
    email: '',
    password: '',
  });
  const [formValidation, setFormValidation] = useState({
    email: false,
    password: false,
  });
  const [isVisiblePassw, setIsVisiblePassw] = useState(false);

  const validate = (field) => {
    switch (field) {
      case 'email':
        return formValidation.email == true && formSignIn.email != ''
          ? 'input-field input-field--error'
          : 'input-field';
        break;
      case 'passw':
        return formValidation.password == true && formSignIn.password != ''
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

      setFormSignIn({
        ...formSignIn,
        email: email
      });
    },
    setPassw: (e) => {
      const passw = e.currentTarget.value;

      var pattern = new RegExp(/[A-Za-z0-9]{6,}/);

      console.log('setPassw:', pattern.test(passw));

      setFormValidation({
        ...formValidation,
        password: pattern.test(passw) ? false : true
      });

      setFormSignIn({
        ...formSignIn,
        password: e.currentTarget.value
      });
    },
    setIsVisiblePassw: (e) => {
      setIsVisiblePassw(!isVisiblePassw);
    }

  }

  const callbacks = {
    onSignIn: useCallback((e) => {
      e.preventDefault();
      console.log('onSetPassw setFormSignIn:', formSignIn);
      dispatch(postSignInThunk(formSignIn));
    }),
  }

  return (
    <form className='form-sign-in'>
      <p className="form-sign-in__title">
        Вход
      </p>
      <div className="form-sign-in__email">
        <label className='form-sign-in__label' htmlFor='sign-in-email'>
          Электронная почта
        </label>
        <input
          id='sign-in-email'
          className={validate('email')}
          type='email'
          placeholder='eve.holt@reqres.in'
          autoComplete="off"
          onChange={handlers.setEmail}
        />
        {(formValidation.email && setFormSignIn.email != '') &&
          <div className="form-sign-in__error form-sign-in--email-error">
            Ошибка
          </div>
        }
      </div>
      <div className="form-sign-in__password">
        <label className='form-sign-in__label' htmlFor='sign-in-password'>
          Пароль
        </label>
        <svg
          onClick={handlers.setIsVisiblePassw}
          className="form-sign-in__password-pic"
          data-passw-pic='passw'
          width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M10.7302 5.07319C11.1448 5.02485 11.5684 5 11.9999 5C16.6639 5 20.3998 7.90264 21.9999 12C21.6053 13.0104 21.0809 13.9482 20.4446 14.7877M6.51956 6.51944C4.47949 7.76406 2.90105 9.69259 1.99994 12C3.60008 16.0974 7.33597 19 11.9999 19C14.0375 19 15.8979 18.446 17.4805 17.4804M9.87871 9.87859C9.33576 10.4215 8.99994 11.1715 8.99994 12C8.99994 13.6569 10.3431 15 11.9999 15C12.8284 15 13.5785 14.6642 14.1214 14.1212" stroke="#808185" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 4L20 20" stroke="#808185" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        <input
          id='sign-in-password'
          className={validate('passw')}
          type={isVisiblePassw ? 'text' : 'password'}
          placeholder='Пароль'
          autoComplete="off"
          onChange={handlers.setPassw}
        />
        {(formValidation.password && setFormSignIn.password != '') &&
          <div className="form-sign-in__error form-sign-in--password-error">
            Ошибка
          </div>
        }
      </div>
      <div className="form-sign-in__wrapp-button">
        <Button
          width='100%'
          height='48px'
          onClick={callbacks.onSignIn}
        >
          Войти
        </Button >
      </div>
    </form>
  )
}

export default FormSignIn;