import styled from 'styled-components';
import { spacing, transition } from 'constants';

export const StyledNav = styled.nav`
  display: none;
  gap: ${spacing(4)};
  font-size: ${spacing(4)};
  font-weight: 400;
  line-height: 1.25;

  & a {
    transition: color ${transition.duration} ${transition.timingFunction};
  }

  & a:is(:hover, :focus) {
    color: ${({ theme }) => theme.primaryColor};
  }

  &.mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 752px) {
    display: flex;
  }
`;
