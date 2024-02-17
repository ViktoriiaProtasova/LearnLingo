import React from 'react';
import { StyledNav } from './Navigation.styled';

const Navigation = ({ className }) => {
  return (
    <StyledNav className={className}>
      <a href="">Home</a>
      <a href="">Teachers</a>
    </StyledNav>
  );
};

export default Navigation;
