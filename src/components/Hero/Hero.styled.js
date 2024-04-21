import styled from 'styled-components';
import { color, spacing } from 'constants';

export const StyledHero = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(568px, 1fr));
  gap: ${spacing(16)};
  align-items: center;
  justify-items: center;

  .hero-content {
    max-width: 720px;
    border-radius: 30px;
    padding: ${spacing(24.5)} ${spacing(16)};
    background-color: ${color.bgColor};
  }

  .hero-title {
    font-size: 48px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    font-weight: 500;
    max-width: 548px;
    margin-bottom: ${spacing(8)};
  }

  .hero-title span {
    display: inline-block;
    font-style: italic;
    min-width: 195px;
    padding-left: ${spacing(1.5)};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.secondaryColor};
  }

  .hero-text {
    font-size: 16px;
    line-height: 1.38;
    letter-spacing: -0.02em;
    max-width: 471px;
    margin-bottom: ${spacing(16)};
  }
`;
