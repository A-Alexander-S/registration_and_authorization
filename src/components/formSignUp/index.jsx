import { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postSignUpThunk } from '../../store/middlewares/authMiddlewares';
import { useInput } from '../../hooks/useInput';
import Button from '../Button';
import './form-sign-up.scss';
// eve.holt@reqres.in
const FormSignUp = () => {

  const [isVisiblePassw, setIsVisiblePassw] = useState(false);
  const [isVisibleConfirmPassw, setIsVisibleConfirmPassw] = useState(false);

  const dispatch = useDispatch();

  const email = useInput('', { isEmpty: true, minLength: 9, isEmail: true });
  const password = useInput('', { isEmpty: true, minLength: 6, maxLength: 20 });

  const handlers = {
    setIsVisiblePassw: () => setIsVisiblePassw(!isVisiblePassw),
    setIsVisibleConfirmPassw: () => setIsVisibleConfirmPassw(!isVisibleConfirmPassw),
  }

  const callbacks = {
    onSignUp: useCallback((e) => {
      dispatch(postSignUpThunk({ email: email.value, password: password.value }));
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
          className={(email.isDirty && email.minLengthError) || (email.isDirty && email.minLengthError) || (email.isDirty && email.emailError) ? 'input-field input-field--error' : 'input-field'}
          type='email'
          placeholder='eve.holt@reqres.in'
          autoComplete="off"
          value={email.value}
          onChange={e => email.onChange(e)}
          onBlur={e => email.onBlur(e)}
        />
        {
          (email.isDirty && email.isEmpty) && <div className="form-sign-up__error form-sign-up--email-error">
            Поле не может быть пустым
          </div>
        }
        {
          (email.isDirty && email.minLengthError) && <div className="form-sign-up__error form-sign-up--email-error">
            Минимум 9 знаков
          </div>
        }
        {
          (email.isDirty && email.emailError) && <div className="form-sign-up__error form-sign-up--email-error">
            Некоректный емейл
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
          className={(password.isDirty && password.isEmpty) || (password.isDirty && password.minLengthError) || (password.isDirty && password.maxLengthError) ? 'input-field input-password input-field--error' : 'input-field input-password'}
          type={isVisiblePassw ? 'text' : 'password'}
          placeholder='Пароль'
          name='password'
          autoComplete="off"
          value={password.value}
          onChange={e => password.onChange(e)}
          onBlur={e => password.onBlur(e)}
        />
        {
          (password.isDirty && password.isEmpty) && <div className="form-sign-up__error form-sign-up--email-error">
            Поле не может быть пустым
          </div>
        }
        {
          (password.isDirty && password.minLengthError) && <div className="form-sign-up__error form-sign-up--email-error">
            Минимум 6 знаков
          </div>
        }
        {
          (password.isDirty && password.maxLengthError) && <div className="form-sign-up__error form-sign-up--email-error">
            Максимум 20 знаков
          </div>
        }
      </div>
      <div className="form-sign-up__confirm-password">
        <label className='form-sign-up__label' htmlFor='sign-up-password'>
          Подтвердите пароль
        </label>
        <svg
          onClick={handlers.setIsVisibleConfirmPassw}
          className="form-sign-up__confirm-password-pic"
          data-passw-pic='confirm-passw'
          width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M10.7302 5.07319C11.1448 5.02485 11.5684 5 11.9999 5C16.6639 5 20.3998 7.90264 21.9999 12C21.6053 13.0104 21.0809 13.9482 20.4446 14.7877M6.51956 6.51944C4.47949 7.76406 2.90105 9.69259 1.99994 12C3.60008 16.0974 7.33597 19 11.9999 19C14.0375 19 15.8979 18.446 17.4805 17.4804M9.87871 9.87859C9.33576 10.4215 8.99994 11.1715 8.99994 12C8.99994 13.6569 10.3431 15 11.9999 15C12.8284 15 13.5785 14.6642 14.1214 14.1212" stroke="#808185" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 4L20 20" stroke="#808185" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        <input
          id='sign-up-confirm-password'
          className='input-field input-password'
          type={isVisibleConfirmPassw ? 'text' : 'password'}
          placeholder='повторите пароль'
          name="confirm-password"
          autoComplete="off"
        />
      </div>
      <div className="form-sign-up__wrapp-button">
        <Button
          width='100%'
          height='48px'
          disabled={!email.inputValid || !password.inputValid}
          onClick={callbacks.onSignUp}
        >
          Зарегестрироваться
        </Button >
      </div>
    </form>
  )
}

export default FormSignUp;