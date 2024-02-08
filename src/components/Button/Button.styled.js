import styled from 'styled-components';
import { color, spacing, transition } from 'constants';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ $registration }) =>
    $registration
      ? `${spacing(3.5)} ${spacing(9.75)};`
      : `${spacing(4)} ${spacing(22)};`};

  font-size: ${({ $registration }) => ($registration ? '16px;' : '18px;')};
  font-family: inherit;
  font-weight: 700;
  line-height: ${({ $registration }) => ($registration ? 1.25 : 1.56)};

  border-radius: 12px;
  border: 1px solid transparent;
  background: ${({ $registration }) =>
    $registration ? `${color.primaryTextColor}` : `${color.primaryYellow}`};

  transition:
    background ${transition.duration} ${transition.timingFunction},
    color ${transition.duration} ${transition.timingFunction};

  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return `
        padding: ${spacing(4)} ${spacing(12)};
      `;
      case 'large':
        return `
        width: 100%;
      `;
      default:
        return `
        color: ${color.primaryTextColor};
      `;
    }
  }}

  color: ${({ $registration }) =>
    $registration
      ? `${color.secondaryTextColor}`
      : `${color.primaryTextColor}`};

  &:hover,
  &:focus {
    background: ${({ $registration }) =>
      $registration
        ? `${color.secondaryTextColor}`
        : `${color.secondaryYellow}`};

    border: ${({ $registration }) =>
      $registration && `1px solid ${color.primaryTextColor}`};

    color: ${({ $registration }) =>
      $registration && `${color.primaryTextColor}`};
  }
`;
