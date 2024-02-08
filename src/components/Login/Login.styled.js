import styled from 'styled-components';
import { color, spacing, transition } from 'constants';

export const StyledLogin = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${spacing(2)};

  .login-icon {
    width: 20px;
    height: 20px;
    color: ${color.primaryYellow};
    transition: color ${transition.duration} ${transition.timingFunction};
  }

  .login-icon:is(:hover, :focus) {
    color: ${color.primaryTextColor};
  }

  .login-icon:is(:hover, :focus) + .login-text {
    color: ${color.primaryYellow};
  }

  .login-text {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.25;
    transition: color ${transition.duration} ${transition.timingFunction};
  }
`;
