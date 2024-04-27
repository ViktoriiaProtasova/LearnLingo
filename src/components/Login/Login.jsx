import React from 'react';
import { LuLogIn } from 'react-icons/lu';
import { StyledLogin } from './Login.styled';

const Login = () => {
  return (
    <StyledLogin href="">
      <LuLogIn className="login-icon" />
      <p className="login-text">Log in</p>
    </StyledLogin>
  );
};

export default Login;
