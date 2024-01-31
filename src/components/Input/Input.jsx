import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './Input.styled';

const Input = ({ name, type, placeholder }) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
    ></StyledInput>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
