import { StyledTitle } from 'components/Booking/Booking.styled';
import Button from 'components/Button/Button';
import { StyledInput } from 'components/Input/Input.styled';
import React from 'react';
import { StyledLoginCard } from './LoginCard.styled';

const LoginCard = () => {
  return (
    <StyledLoginCard>
      <StyledTitle>
        <h1 className="booking-title">Log In</h1>
        <p className="booking-text">
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
      </StyledTitle>
      <fieldset className="input-group">
        <StyledInput></StyledInput>
        <StyledInput></StyledInput>
      </fieldset>
      <Button $size="large">Log In</Button>
    </StyledLoginCard>
  );
};

export default LoginCard;
