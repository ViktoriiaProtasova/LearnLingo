import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1184px;

  .auth-wrapper {
    display: flex;
    gap: 16px;
  }

  nav {
    display: flex;
    gap: 16px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
  }
`;
