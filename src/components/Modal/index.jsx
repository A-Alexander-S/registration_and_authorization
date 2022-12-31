import { memo } from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

const Modal = ({ element }) => {
  return (
    <div className='modal'>
      {element}
    </div>
  )
}

Modal.propTypes = {
  element: PropTypes.element
}

export default memo(Modal);