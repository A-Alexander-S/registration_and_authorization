import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './button.scss';

const Button = ({ width, height, children }) => {
  return (
    <button
      className="button"
      style={{ height: height, width: width }}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  height: PropTypes.string,
}

// Button.defaultProps = {

// }

export default Button;