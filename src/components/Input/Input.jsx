import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import { StyledInput } from './Input.styled';

const Input = ({ name, type, placeholder, autoComplete, autoFocus }) => {
  return (
    <Field
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      as={StyledInput}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
};

export default Input;
