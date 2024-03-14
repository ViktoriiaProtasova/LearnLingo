import styled from 'styled-components';
import { transition } from 'constants';
import { spacing } from 'constants';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${spacing(4)};
  height: 48px;
  max-width: 1184px;
  margin: 0 auto 20px;

  & > fieldset {
    @media screen and (max-width: 752px) {
      display: none;
    }
  }

  & > button {
    display: block;
    transition: color ${transition.duration} ${transition.timingFunction};

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.primaryColor};
    }
  }

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media screen and (min-width: 752px) {
      & > button {
        display: none;
      }
    }
  }
`;
