import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './Input.styled';

const Input = ({ name, type, placeholder, autoComplete, autoFocus }) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
};

export default Input;
