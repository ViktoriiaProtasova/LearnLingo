import React from 'react';

import { StyledInput } from 'components/Input/Input.styled';
import { StyledLoginCard } from './LoginCard.styled';
import Button from 'components/Button/Button';

import FormTitle from 'components/FormTitle/FormTitle';

const LoginCard = () => {
  return (
    <StyledLoginCard>
      <FormTitle
        $title="Log In"
        $text="Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher."
      />
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
