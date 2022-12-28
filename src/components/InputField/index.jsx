import { useState } from 'react';
import PropTypes from 'prop-types';
import './input-field.scss';

const InputField = ({
  id,
  type,
  placeholder,
  width,
  onChange
}) => {

  const [value, setValue] = useState(null);
  const [isError, setIsError] = useState(false);

  const handlers = {
    onChange: (e) => {

      // switch (type) {
      //   case 'text':

      //     break;
      //   case 'email':
      //     if (e.currentTarget.value != 'eve.holt@reqres.in') setIsError(true);
      //     break;
      //   default:
      //     break;
      // }

      // e.preventDefault();
      // console.log('InputField e:', e.currentTarget.value);
      setValue(e.currentTarget.value);
      onChange(e.currentTarget.value);
    },
  }

  return (
    <input
      id={id}
      className='input-field input-field--error'
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      value={value}
      style={{ width: width }}
      onChange={handlers.onChange}
    />
  )
}

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

InputField.defaultProps = {
  onChange: () => { }
}

export default InputField;