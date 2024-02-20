import React from 'react';

import { StyledInput } from 'components/Input/Input.styled';
import { StyledRegistrationCard } from './RegistrationCard.styled';
import Button from 'components/Button/Button';
import FormTitle from 'components/FormTitle/FormTitle';

const RegistrationCard = () => {
  return (
    <StyledRegistrationCard>
      <FormTitle
        $title="Registration"
        $text="Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information."
      />

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
