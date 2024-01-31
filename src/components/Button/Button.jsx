import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

const Button = ({ $size, $registration, children }) => {
  return (
    <StyledButton $size={$size} $registration={$registration}>
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
