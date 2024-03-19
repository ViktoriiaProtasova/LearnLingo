import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

const Button = ({ type, $size, $registration, children }) => {
  return (
    <StyledButton type={type} $size={$size} $registration={$registration}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  $size: PropTypes.string,
  $registration: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
