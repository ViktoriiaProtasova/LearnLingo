import styled from 'styled-components';

export const StyledHero = styled.div`
  max-width: 720px;
  max-height: 530px;
  padding: 98px 64px;
  border-radius: 30px;
  background-color: var(--bg-color);

  .hero-title {
    font-size: 48px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    font-weight: 500;
    max-width: 548px;
    margin-bottom: 32px;
  }

  .hero-title span {
    display: inline-block;
    font-style: italic;
    min-width: 195px;
    padding-left: 12px;
    border-radius: 8px;
    background-color: var(--light-yellow);
  }

  .hero-text {
    font-size: 16px;
    line-height: 1.38;
    letter-spacing: -0.02em;
    max-width: 471px;
    margin-bottom: 64px;
  }
`;
