import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './Input.styled';

const Input = ({ name, type, placeholder, autoComplete }) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
    ></StyledInput>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
};

export default Input;
