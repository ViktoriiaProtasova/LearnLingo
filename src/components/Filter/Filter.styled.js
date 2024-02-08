import styled from 'styled-components';
import { color, spacing, transition } from 'constants';

export const StyledFilter = styled.fieldset`
  legend {
    margin-bottom: ${spacing(2)};
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
    color: ${color.lightTextColor};
  }
`;

export const StyledSelect = styled.select`
  width: ${({ $title }) => ($title === 'price' ? '124px' : '198px')};
  height: 48px;
  border-radius: 14px;
`;
