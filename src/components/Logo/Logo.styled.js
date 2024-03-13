import styled from 'styled-components';
import { color, spacing, transition } from 'constants';

export const StyledLogo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${spacing(2)};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  transition: color ${transition.duration} ${transition.timingFunction};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.primaryColor};
  }
`;
