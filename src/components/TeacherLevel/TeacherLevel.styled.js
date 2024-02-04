import styled from 'styled-components';

export const StyledTeacherLevel = styled.span`
  height: 32px;
  border: 1px solid var(--primary-middle);
  border-radius: 35px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;

  ${({ $isActive }) =>
    $isActive &&
    `
		border: transparent;
    background-color: var(--primary-yellow);
  `}
`;
