import styled from 'styled-components';
import { color, transition } from 'constants';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1184px;
  height: 48px;
  margin: 0 auto 20px;

  & > button {
    display: block;
    transition: color ${transition.duration} ${transition.timingFunction};

    &:hover,
    &:focus {
      color: ${theme => theme.primaryColor};
    }
  }

  @media screen and (min-width: 752px) {
    & > button {
      display: none;
    }
  }
`;
