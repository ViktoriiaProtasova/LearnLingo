import React from 'react';
import { StyledLoginCard } from './LoginCard.styled';
import Button from 'components/Button/Button';
import FormTitle from 'components/FormTitle/FormTitle';
import Input from 'components/Input/Input';

const LoginCard = () => {
  return (
    <StyledLoginCard>
      <FormTitle
        $title="Log In"
        $text="Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher."
      />
      <fieldset className="input-group">
        <Input
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="email"
          autoFocus
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
      </fieldset>
      <Button $size="large">Log In</Button>
    </StyledLoginCard>
  );
};

export default LoginCard;
