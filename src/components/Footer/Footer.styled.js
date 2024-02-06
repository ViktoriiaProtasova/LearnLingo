import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  color: var(--primary-midnight);

  p:not(:last-child)::after {
    content: '|';
    margin: 0 8px;
    color: var(--primary-midnight);
  }

  a {
    transition: color var(--transition-duration)
      var(--transition-timing-function);
  }

  a:is(:hover, :focus) {
    color: var(--primary-yellow);
  }
`;
