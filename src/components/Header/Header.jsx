import React from 'react';
import { StyledHeader } from './Header.styled';
import Logo from 'components/Logo/Logo';
import Login from 'components/Login/Login';
import Button from 'components/Button/Button';

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <nav>
        <a href="">Home</a>
        <a href="">Teachers</a>
      </nav>
      <div className="auth-wrapper">
        <Login />
        <Button $registration>Registration</Button>
      </div>
    </StyledHeader>
  );
};

export default Header;
