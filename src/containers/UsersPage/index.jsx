import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getUsersThunk } from '../../store/middlewares/usersMiddlewares';
import { logoutActions } from '../../store/actions/authActions';
import UserCard from '../../components/userCard';
import Button from '../../components/Button';
import Pagination from '../../components/Pagination';
import './users-page.scss';

const UsersPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const select = useSelector(store => ({
    users: store.usersReducer.usersData.users,
    totalPages: store.usersReducer.usersData.pagination?.total_pages,
    isLogout: store.authReducer.isLogout
  }));

  const [widthWindow, setWidthWindow] = useState(1280);

  useEffect(() => {
    dispatch(getUsersThunk());

    setWidthWindow(document.documentElement.clientWidth);

    window.addEventListener('resize', () => {
      setWidthWindow(document.documentElement.clientWidth);
    });
  }, []);

  // useEffect(() => {
  //   if (select.isLogout) navigate('/start');
  // }, [select.isLogout]);

  const callbacks = {
    onGetUsers: useCallback(page => dispatch(getUsersThunk(page))),
    onLogout: useCallback(() => {
      dispatch(logoutActions.start());
      navigate('/start');
    }),
  }

  return (
    <div className="users-page">
      <div className="users-page__flex">
        <div className="users-page__header">
          <div className="container">
            <div className="users-page__header-flex">
              <div className="users-page__wrapp-button users-page__wrapp-button--exit">
                {widthWindow > 730
                  ?
                  <Button
                    height='38px'
                    onClick={callbacks.onLogout}
                  >
                    Выход
                  </Button>
                  :
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M7.79 13.29C8.18 13.68 8.81 13.68 9.2 13.29L12.79 9.7C12.8827 9.60749 12.9563 9.4976 13.0064 9.37662C13.0566 9.25565 13.0824 9.12597 13.0824 8.995C13.0824 8.86403 13.0566 8.73435 13.0064 8.61338C12.9563 8.4924 12.8827 8.38251 12.79 8.29L9.2 4.7C9.01302 4.51302 8.75943 4.40798 8.495 4.40798C8.23057 4.40798 7.97698 4.51302 7.79 4.7C7.60302 4.88698 7.49798 5.14057 7.49798 5.405C7.49798 5.66943 7.60302 5.92302 7.79 6.11L9.67 8H1C0.45 8 0 8.45 0 9C0 9.55 0.45 10 1 10H9.67L7.79 11.88C7.4 12.27 7.41 12.91 7.79 13.29ZM16 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V5C0 5.55 0.45 6 1 6C1.55 6 2 5.55 2 5V3C2 2.45 2.45 2 3 2H15C15.55 2 16 2.45 16 3V15C16 15.55 15.55 16 15 16H3C2.45 16 2 15.55 2 15V13C2 12.45 1.55 12 1 12C0.45 12 0 12.45 0 13V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z" fill="#F8F8F8" />
                  </svg>
                }

              </div>
              <div className="users-page__header-title">
                <h1 className="users-page__h1">Наша команда</h1>
                <div className="users-page__header-desk">
                  Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="users-page__users">
          <div className="container">
            <div className="users-page__users-flex">
              {select.users?.map(el => {
                const addr = `/users/${el.id}`;
                return <Link to={addr} className="users-page__wrapp-user-card" key={el.id}>
                  <UserCard
                    id={el.id}
                    first_name={el.first_name}
                    last_name={el.last_name}
                    avatar={el.avatar}
                  />
                </Link>
              })}
            </div>
          </div>
        </section>
        <div className="users-page__wrapp-pagination">
          <Pagination
            length={select.totalPages ? select.totalPages : 1}
            onClick={callbacks.onGetUsers}
          />
        </div>
      </div>
    </div>
  )
}

export default UsersPage;