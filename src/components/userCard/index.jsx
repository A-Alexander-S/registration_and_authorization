import { memo } from 'react';
import PropTypes from 'prop-types';
import './user-card.scss';

const UserCard = ({
  id,
  first_name,
  last_name,
  avatar,
}) => {

  return (
    <div className="user-card">
      <div className="user-card__preview">
        <div className="user-card__avatar">
          <img src={avatar} alt="Аватарка" />
        </div>
        <p className="user-card__name">
          {`${first_name} ${last_name}`}
        </p>
      </div>
      <div className="user-card__like">
        <svg width="16" height="14" viewBox="0 0 16 14" fill="#512689">
          <path d="M4.85 1C2.72375 1 1 2.72173 1 4.84548C1 8.69096 5.55 12.1869 8 13C10.45 12.1869 15 8.69096 15 4.84548C15 2.72173 13.2762 1 11.15 1C9.848 1 8.6965 1.64569 8 2.63398C7.64499 2.1289 7.17336 1.71669 6.62504 1.43226C6.07672 1.14784 5.46785 0.999565 4.85 1Z" stroke="#151317" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

UserCard.propTypes = {
  id: PropTypes.number.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
}

export default memo(UserCard);