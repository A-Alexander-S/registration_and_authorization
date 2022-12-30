import PropTypes from 'prop-types';
import './button.scss';

const Button = ({
  width,
  height,
  children,
  disabled,
  onClick
}) => {

  const handleClick = (e) => {
    e.preventDefault();
    onClick(e);
  }

  return (
    <button
      className="button"
      disabled={disabled ? disabled : false}
      style={{ height: height, width: width, backgroundColor: disabled ? '#808185' : '#512689' }}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

// Button.defaultProps = {

// }

export default Button;