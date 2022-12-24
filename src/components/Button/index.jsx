import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './button.scss';

const Button = ({ children, height }) => {
  return (
    <button
      className="button"
      style={{ height: height }}
    >
      {children}
      {/* <Link className="button__link">{children}</Link> */}
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