import styled from 'styled-components';
import { color, spacing } from 'constants';

export const StyledTeacherLevel = styled.span`
  height: 32px;
  border: 1px solid ${color.primaryMiddle};
  border-radius: 35px;
  padding: ${spacing(2)} ${spacing(3)};
  justify-content: center;
  align-items: center;
  display: inline-flex;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;

  ${({ $isActive }) =>
    $isActive &&
    `border: transparent;
    background-color: ${color.primaryYellow};
  `}
`;
