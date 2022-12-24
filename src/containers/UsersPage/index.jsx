import UserCard from '../../components/userCard';
import Button from '../../components/Button';
import './users-page.scss';

const UsersPage = () => {
  return (
    <div className="users-page">
      <div className="users-page__header">
        <div className="container">
          <div className="users-page__flex">
            <div className="users-page__wrapp-button users-page__wrapp-button--exit">
              <Button
                height='38px'
              >Выход</Button>
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
            <div className="users-page__wrapp-user-card">
              <UserCard />
            </div>
            <div className="users-page__wrapp-user-card">
              <UserCard />
            </div>
            <div className="users-page__wrapp-user-card">
              <UserCard />
            </div>
            <div className="users-page__wrapp-user-card">
              <UserCard />
            </div>
            <div className="users-page__wrapp-user-card">
              <UserCard />
            </div>
            <div className="users-page__wrapp-user-card">
              <UserCard />
            </div>
            <div className="users-page__wrapp-user-card">
              <UserCard />
            </div>
            <div className="users-page__wrapp-user-card">
              <UserCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UsersPage;