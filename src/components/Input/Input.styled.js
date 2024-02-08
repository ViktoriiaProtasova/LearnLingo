import styled from 'styled-components';
import { color, spacing } from 'constants';

export const StyledInput = styled.input`
  padding: ${spacing(4)} ${spacing(4.5)};
  border-radius: 12px;
  border: 1px solid ${color.primaryLight};
  font-family: inherit;
  font-size: 16px;
  line-height: 1.38;
`;
