import styled from 'styled-components';
import { spacing } from 'constants';

export const StyledFormTitle = styled.div`
  .form-title {
    font-size: 40px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.8px;
    margin-bottom: ${spacing(5)};
  }

  .form-text {
    font-size: 16px;
    font-style: normal;
    line-height: 1.38;
  }

  margin-bottom: ${({ $title }) =>
    $title === 'Book trial lesson' ? `${spacing(5)}` : `${spacing(10)}`};
`;
