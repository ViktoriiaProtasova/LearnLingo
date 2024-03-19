import React from 'react';
import { Formik, Form } from 'formik';
import { StyledLoginCard } from './LoginCard.styled';
import Button from 'components/Button/Button';
import FormTitle from 'components/FormTitle/FormTitle';
import Input from 'components/Input/Input';

const LoginCard = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { resetForm }) => {
        resetForm();
      }}
    >
      <Form as={StyledLoginCard}>
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
        <Button type="submit" $size="large">
          Log In
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginCard;
