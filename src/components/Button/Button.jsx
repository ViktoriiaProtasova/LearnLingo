import React from 'react';
import PropTypes from 'prop-types';
import { StyledBtn } from './Button.styled';

const Button = ({ $size, $registration, children }) => {
  return (
    <StyledBtn $size={$size} $registration={$registration}>
      {children}
    </StyledBtn>
  );
};

Button.propTypes = {
  $size: PropTypes.string,
  $registration: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
