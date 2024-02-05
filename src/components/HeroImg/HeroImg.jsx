import React from 'react';
import hero from '../../images/block-1.jpg';
import { StyledHeroImg } from './HeroImg.styled';

const HeroImg = () => {
  return (
    <StyledHeroImg>
      <img src={hero} alt="Girl with laptop" />
    </StyledHeroImg>
  );
};

export default HeroImg;
