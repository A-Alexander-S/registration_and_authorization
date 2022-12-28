import { useState } from 'react';
import PropTypes from 'prop-types';
// import eyeClosed from './img/eye-closed.svg';
// import eyeOpen from './img/eye-open.svg';
import './input-password.scss';

const InputPassword = ({
  id,
  type,
  placeholder,
  width,
  onChange
}) => {


  const [value, setValue] = useState();

  const handlers = {
    onChange: (e) => {
      // setValue(e.currentTarget.value);
      onChange(e.currentTarget.value);
    },
  }

  return (
    <input
      id={id}
      className='input-password'
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      // value={value}
      style={{ width: width }}
      onChange={handlers.onChange}
    />
  )
}

InputPassword.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

InputPassword.defaultProps = {
  onChange: () => { }
}

export default InputPassword;