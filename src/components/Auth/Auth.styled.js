import styled from 'styled-components';
import { spacing } from 'constants';

export const StyledAuth = styled.div`
  display: none;
  gap: ${spacing(4)};

  &.mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 752px) {
    display: flex;
  }
`;
