import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getUserThunk } from '../../store/middlewares/usersMiddlewares';
import Button from '../../components/Button';
import './user-page.scss';

const UserPage = () => {

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const select = useSelector(store => ({
    user: store.usersReducer.userData.user,
  }));

  console.log('UserPage select.user:', select.user);

  const [widthWindow, setWidthWindow] = useState(1280);

  useEffect(() => {
    dispatch(getUserThunk(params.id));

    setWidthWindow(document.documentElement.clientWidth);

    window.addEventListener('resize', () => {
      setWidthWindow(document.documentElement.clientWidth);
    });
  }, []);

  const handlers = {
    onRedirect: () => {
      console.log('handlers.onRedirect: ', 'onRedirect')
      navigate('/users')
    },
  }

  const callbacks = {
    onRedirect: useCallback(() => {
      console.log('callbacks.onRedirect: ', 'onRedirect')
      navigate('/users')
    }),
  }

  return (
    <div className="user-page">
      <div className="user-page__header">
        <div className="container">
          <div className="user-page__header-flex">


            <div className="user-page__wrapp-button user-page__wrapp-button--prev">
              <Button
                width='81px'
                height='38px'
                onClick={callbacks.onRedirect}
              >
                Назад
              </Button>
            </div>

            <div className="user-page__header-body">
              <div className="user-page__avatar">
                <img src={select.user?.avatar} alt="" />
              </div>
              <div className="user-page__header-body-info">
                <p className="user-page__name">
                  {`${select.user?.first_name} ${select.user?.last_name}`}
                </p>
                <p className="user-page__status">
                  Партнёр
                </p>
              </div>
            </div>

            <div className="user-page__wrapp-button user-page__wrapp-button--exit">
              {widthWindow > 767
                ?
                <Button
                  height='38px'
                >
                  Выход
                </Button>
                :
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M7.79 13.29C8.18 13.68 8.81 13.68 9.2 13.29L12.79 9.7C12.8827 9.60749 12.9563 9.4976 13.0064 9.37662C13.0566 9.25565 13.0824 9.12597 13.0824 8.995C13.0824 8.86403 13.0566 8.73435 13.0064 8.61338C12.9563 8.4924 12.8827 8.38251 12.79 8.29L9.2 4.7C9.01302 4.51302 8.75943 4.40798 8.495 4.40798C8.23057 4.40798 7.97698 4.51302 7.79 4.7C7.60302 4.88698 7.49798 5.14057 7.49798 5.405C7.49798 5.66943 7.60302 5.92302 7.79 6.11L9.67 8H1C0.45 8 0 8.45 0 9C0 9.55 0.45 10 1 10H9.67L7.79 11.88C7.4 12.27 7.41 12.91 7.79 13.29ZM16 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V5C0 5.55 0.45 6 1 6C1.55 6 2 5.55 2 5V3C2 2.45 2.45 2 3 2H15C15.55 2 16 2.45 16 3V15C16 15.55 15.55 16 15 16H3C2.45 16 2 15.55 2 15V13C2 12.45 1.55 12 1 12C0.45 12 0 12.45 0 13V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z" fill="#F8F8F8" />
                </svg>
              }
            </div>



          </div>
        </div>
      </div>
      <div className="user-page__info">
        <div className="container">

          <div className="user-page__info-flex">
            <div className="user-page__desc">
              Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.
              <br />
              <br />
              В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".
              <br />
              <br />
              Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.
            </div>

            <ul className="user-page__contacts">
              <li className="user-page__contacts-phone">
                +7 (954) 333-44-55
              </li>
              <li className="user-page__contacts-email">
                {select.user?.email}
              </li>
            </ul>
          </div>


        </div>
      </div>
    </div>
  )
}

export default UserPage;