import styled from 'styled-components';
import { getHero2x } from 'utils';
import { getHero3x } from 'utils';
import { getHero } from 'utils';

export const StyledHeroImg = styled.div`
  width: 568px;
  height: 530px;
  border-radius: 30px;
  background-image: ${({ theme }) => `url(${getHero(`${theme.themeColor}`)})`};
  background-position: center;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: ${({ theme }) =>
        `url(${getHero2x(`${theme.themeColor}`)})`};
    }
  }

  @media (min-device-pixel-ratio: 3),
    (min-resolution: 288dpi),
    (min-resolution: 3dppx) {
    & {
      background-image: ${({ theme }) =>
        `url(${getHero3x(`${theme.themeColor}`)})`};
    }
  }
`;
