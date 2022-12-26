import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './button.scss';

const Button = ({
  width,
  height,
  children,
  onClick
}) => {

  return (
    <button
      className="button"
      style={{ height: height, width: width }}
      onClick={() => onClick()}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func,
}

// Button.defaultProps = {

// }

export default Button;