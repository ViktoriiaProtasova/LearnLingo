import React from 'react';
import { StyledRegistrationCard } from './RegistrationCard.styled';
import Button from 'components/Button/Button';
import FormTitle from 'components/FormTitle/FormTitle';
import Input from 'components/Input/Input';

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
        <Input
          name="name"
          type="text"
          placeholder="Name"
          autoComplete="name"
          autoFocus
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="email"
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
      </fieldset>
      <Button $size="large">Sign Up</Button>
    </StyledRegistrationCard>
  );
};

export default RegistrationCard;
