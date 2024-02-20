import React from 'react';
import PropTypes from 'prop-types';
import { StyledFormTitle } from './FormTitle.styled';

const FormTitle = ({ $title, $text }) => {
  return (
    <StyledFormTitle $title={$title} $text={$text}>
      <h1 className="form-title">{$title}</h1>
      <p className="form-text">{$text}</p>
    </StyledFormTitle>
  );
};

FormTitle.propTypes = { $title: PropTypes.string, $text: PropTypes.string };

export default FormTitle;
