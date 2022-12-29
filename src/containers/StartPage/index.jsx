import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken } from '../../utils/token';
import FormSignUp from '../../components/formSignUp';
import FormSignIn from '../../components/formSignIn';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import './start-page.scss';

const StartPage = () => {

  const token = getToken();

  const navigate = useNavigate();

  const select = useSelector(store => ({
    userData: store.authReducer.userData,
    signInData: store.authReducer.signInData,
  }));

  const [modal, setModal] = useState({
    element: 'FormSignIn',
    // element: 'FormSignIn',
    isActive: true
  });

  useEffect(() => {
    if (token) navigate('/users');
  }, [select.userData]);

  useEffect(() => {
    if (token) navigate('/users');
  }, [select.signInData]);

  const callbacks = {
    onSetActiveFormSignUp: useCallback(() => {
      setModal({
        ...modal,
        element: 'FormSignUp'
      });
    }),
    onSetActiveFormSignIn: useCallback(() => {
      setModal({
        ...modal,
        element: 'FormSignIn'
      });
    }),
  }

  return (
    <div className="start-page">
      <div className="start-page__header">
        <div className="start-page__btns">
          <div className="start-page__wrapp-button start-page__wrapp-button--sign-up">
            <Button
              width='200px'
              height='38px'
              onClick={callbacks.onSetActiveFormSignUp}
            >
              Зарегестрироваться
            </Button>
          </div>
          <div className="start-page__wrapp-button start-page__wrapp-button--sign-in">
            <Button
              width='200px'
              height='38px'
              onClick={callbacks.onSetActiveFormSignIn}
            >
              Войти
            </Button>
          </div>
        </div>
      </div>
      {modal.isActive &&
        <Modal
          element={modal.element == 'FormSignUp' ? <FormSignUp /> : <FormSignIn />}
        // element={<FormSignUp />}
        />
      }

    </div>
  )
}

export default StartPage;