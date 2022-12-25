import PropTypes from 'prop-types';
import './input-field.scss';

const InputField = ({
  id,
  type,
  placeholder,
  width,
  onChange
}) => {

  const handlers = {
    onChange: (e) => onChange(e),
  }

  return (
    <input
      id={id}
      className='input-field'
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      style={{ width: width }}
      onChange={handlers.onChange}
    />
  )
}

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

InputField.defaultProps = {
  onChange: () => { }
}

export default InputField;