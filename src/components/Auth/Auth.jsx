import React from 'react';
import { StyledAuth } from './Auth.styled';
import Login from 'components/Login/Login';
import Button from 'components/Button/Button';

const Auth = ({ className }) => {
  return (
    <StyledAuth className={className}>
      <Login />
      <Button $registration>Registration</Button>
    </StyledAuth>
  );
};

export default Auth;
