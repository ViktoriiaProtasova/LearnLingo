import styled from 'styled-components';
import { color, spacing, transition } from 'constants';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 128px;

  .auth-wrapper {
    display: flex;
    gap: ${spacing(4)};
  }

  nav {
    display: flex;
    gap: ${spacing(4)};
    font-size: ${spacing(4)};
    font-weight: 400;
    line-height: 1.25;
  }

  nav a {
    transition: color ${transition.duration} ${transition.timingFunction};
  }

  nav a:is(:hover, :focus) {
    color: ${color.primaryYellow};
  }
`;
