import styled from 'styled-components';
import { color, spacing } from 'constants';

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
  width: ${({ $title }) => {
    switch ($title) {
      case 'price':
        return '124px';
      case 'languages':
        return '198px';
      default:
        return '68px';
    }
  }};

  height: ${({ $title }) => {
    return $title === 'Theme' && `${spacing(7)}`;
  }};

  border-radius: 14px;
  cursor: pointer;
`;
