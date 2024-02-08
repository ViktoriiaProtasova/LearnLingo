import styled from 'styled-components';
import { color, spacing } from 'constants';

export const StyledHero = styled.div`
  max-width: 720px;
  max-height: 530px;
  padding: ${spacing(24.5)} ${spacing(16)};
  border-radius: 30px;
  background-color: ${color.bgColor};

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
    padding-left: ${spacing(3)};
    border-radius: 8px;
    background-color: ${color.lightYellow};
  }

  .hero-text {
    font-size: 16px;
    line-height: 1.38;
    letter-spacing: -0.02em;
    max-width: 471px;
    margin-bottom: ${spacing(16)};
  }
`;
