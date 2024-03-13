import styled from 'styled-components';
import { color, spacing, transition } from 'constants';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacing(10)};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  color: ${color.primaryMidnight};

  p:not(:last-child)::after {
    content: '|';
    margin: 0 ${spacing(2)};
    color: ${color.primaryMidnight};
  }

  a {
    transition: color ${transition.duration} ${transition.timingFunction};
  }

  a:is(:hover, :focus) {
    color: ${({ theme }) => theme.primaryColor};
  }
`;
