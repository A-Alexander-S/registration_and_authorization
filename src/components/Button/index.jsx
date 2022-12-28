import PropTypes from 'prop-types';
import './button.scss';

const Button = ({
  width,
  height,
  children,
  onClick
}) => {

  const handleClick = (e) => {
    e.preventDefault();
    onClick(e);
  }

  return (
    <button
      className="button"
      style={{ height: height, width: width }}
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
  onClick: PropTypes.func,
}

// Button.defaultProps = {

// }

export default Button;