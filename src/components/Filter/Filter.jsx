import React from 'react';
import { StyledFilter, StyledSelect } from './Filter.styled';
import { getFilterOptions } from 'utils';

const Filter = ({ $type, $title }) => {
  return (
    <StyledFilter>
      {`${$title}` !== 'Theme' && <legend>{$title}</legend>}
      <StyledSelect $title={$title} name={$title} defaultValue="">
        <option value="">{$title}</option>
        {getFilterOptions($type)}
      </StyledSelect>
    </StyledFilter>
  );
};

export default Filter;
