import React from 'react';
import { StyledTitle } from 'components/Booking/Booking.styled';
import { StyledInput } from 'components/Input/Input.styled';
import { StyledRegistrationCard } from './RegistrationCard.styled';
import Button from 'components/Button/Button';

const RegistrationCard = () => {
  return (
    <StyledRegistrationCard>
      <StyledTitle>
        <h1 className="form-title">Registration</h1>
        <p className="form-text">
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
      </StyledTitle>
      <fieldset className="input-group">
        <StyledInput
          name="name"
          type="text"
          placeholder="Name"
          autoComplete="name"
        ></StyledInput>
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
      <Button $size="large">Sign Up</Button>
    </StyledRegistrationCard>
  );
};

export default RegistrationCard;
