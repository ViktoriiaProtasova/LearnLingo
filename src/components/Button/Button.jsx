import React from 'react';
import PropTypes from 'prop-types';
import { StyledBtn, StyledBtnLarge, StyledBtnSmall } from './Button.styled';

const Button = ({ view, $registration, children }) => {
  switch (view) {
    case 'small':
      return (
        <StyledBtnSmall $registration={$registration}>
          {children}
        </StyledBtnSmall>
      );

    case 'large':
      return (
        <StyledBtnLarge $registration={$registration}>
          {children}
        </StyledBtnLarge>
      );

    default:
      return <StyledBtn $registration={$registration}>{children}</StyledBtn>;
  }
};

Button.propTypes = {
  view: PropTypes.string,
  $registration: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
