import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken } from '../../utils/token';
import FormSignUp from '../../components/formSignUp';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import './start-page.scss';

const StartPage = () => {

  const token = getToken();

  const navigate = useNavigate();

  const select = useSelector(store => ({
    userData: store.authReducer.userData
  }));

  useEffect(() => {
    if (token) navigate('/users');
  }, [select.userData]);

  return (
    <div className="start-page">
      <div className="start-page__header">
        <div className="start-page__btns">
          <div className="start-page__wrapp-button start-page__wrapp-button--sign-up">
            <Button
              width='200px'
              height='38px'
            >
              Зарегестрироваться
            </Button>
          </div>
          <div className="start-page__wrapp-button start-page__wrapp-button--sign-in">
            <Button
              width='200px'
              height='38px'
            >
              Войти
            </Button>
          </div>
        </div>
      </div>
      <Modal
        element={<FormSignUp />}
      />
    </div>
  )
}

export default StartPage;