import React from 'react';
import logo from '../../images/logo.svg';
import { StyledLogo } from './Logo.styled';

const Logo = () => {
  return (
    <StyledLogo href="">
      <img src={logo} alt="Logo" />
      LearnLingo
    </StyledLogo>
  );
};

export default Logo;
