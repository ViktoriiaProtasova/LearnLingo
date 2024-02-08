import React from 'react';
import { StyledFilter, StyledSelect } from './Filter.styled';
import levels from '../../data/levels';
import languages from '../../data/languages';

const Filter = ({ $type, $title }) => {
  let options = [];

  if ($type === 'languages') {
    options = languages.map((language, index) => (
      <option key={index} value={language}>
        {language}
      </option>
    ));
  } else if ($type === 'levels') {
    options = levels.map((level, index) => (
      <option key={index} value={level}>
        {level}
      </option>
    ));
  } else if ($type === 'price') {
    for (let i = 0; i <= 100; i += 10) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>,
      );
    }
  }

  return (
    <StyledFilter>
      <legend>{$title}</legend>
      <StyledSelect $title={$title} name={$title} id="">
        {options}
      </StyledSelect>
    </StyledFilter>
  );
};

export default Filter;
