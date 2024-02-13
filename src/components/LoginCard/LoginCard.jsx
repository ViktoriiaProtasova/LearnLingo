import React from 'react';
import { StyledTitle } from 'components/Booking/Booking.styled';
import { StyledInput } from 'components/Input/Input.styled';
import { StyledLoginCard } from './LoginCard.styled';
import Button from 'components/Button/Button';

const LoginCard = () => {
  return (
    <StyledLoginCard>
      <StyledTitle>
        <h1 className="form-title">Log In</h1>
        <p className="form-text">
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
      </StyledTitle>
      <fieldset className="input-group">
        <StyledInput
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="email"
        ></StyledInput>
        <StyledInput
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        ></StyledInput>
      </fieldset>
      <Button $size="large">Log In</Button>
    </StyledLoginCard>
  );
};

export default LoginCard;
