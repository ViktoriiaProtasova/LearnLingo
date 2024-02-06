import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ $registration }) =>
    $registration ? '14px 39px;' : '16px 88px;'};

  font-size: ${({ $registration }) => ($registration ? '16px;' : '18px;')};
  font-family: inherit;
  font-weight: 700;
  line-height: ${({ $registration }) => ($registration ? 1.25 : 1.56)};

  border-radius: 12px;
  border: 1px solid transparent;
  background: ${({ $registration }) =>
    $registration ? 'var(--primary-text-color)' : 'var(--primary-yellow)'};

  transition:
    background var(--transition-duration) var(--transition-timing-function),
    color var(--transition-duration) var(--transition-timing-function);

  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return `
        padding: 16px 48px;
      `;
      case 'large':
        return `
        width: 100%;
      `;
      default:
        return `
        color: var(--primary-text-color);
      `;
    }
  }}

  color: ${({ $registration }) =>
    $registration
      ? 'var(--secondary-text-color)'
      : 'var(--primary-text-color)'};

  &:hover,
  &:focus {
    background: ${({ $registration }) =>
      $registration
        ? 'var(--secondary-text-color)'
        : 'var(--secondary-yellow)'};

    border: ${({ $registration }) =>
      $registration && '1px solid var(--primary-text-color)'};

    color: ${({ $registration }) =>
      $registration && 'var(--primary-text-color)'};
  }
`;
