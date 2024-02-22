import React from 'react';
import hero from '../../images/block-1.jpg';
import hero2x from '../../images/block-1@2x.jpg';
import hero3x from '../../images/block-1@3x.jpg';

import { StyledHeroImg } from './HeroImg.styled';

const HeroImg = () => {
  return (
    <StyledHeroImg>
      <img
        srcSet={`${hero} 568w, ${hero2x} 1136w, ${hero3x} 1704w`}
        src={hero}
        sizes="100vw"
        alt="Girl with a laptop"
      />
    </StyledHeroImg>
  );
};

export default HeroImg;
